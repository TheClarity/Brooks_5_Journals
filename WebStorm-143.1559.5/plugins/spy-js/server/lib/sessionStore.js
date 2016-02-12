/*
 * spy-js - v2.0.0
 * http://spy-js.com
 * Copyright (c) 2013-2015 JetBrains - All Rights Reserved.
 *
 * This source code file is a part of spy-js plugin.
 */
var path=require("path"),fs=require("graceful-fs"),EventEmitter=require("events").EventEmitter,temp=require("temp"),_=_spy_js._,AdmZip=require("adm-zip");temp.track();var root=temp.mkdirSync("spy-js-session"),FileSystemSessionStore=function(a){var b=this;b._root=root,b._sessionId=a,b._location=path.join(b._root,a),b._event=null,b._streamContexts={},fs.existsSync(b._location)||fs.mkdirSync(b._location),console.log("session store: "+b._root)};FileSystemSessionStore.prototype=_.extend(Object.create(EventEmitter.prototype),{save:function(a){var b=this,c=a.streamId,d=a.eventId,e=a.data,f=a.done;if(e){if(!b._streamContexts)throw new Error("Can not use disposed session store");var g=b._streamContexts[c];g||(g=b._streamContexts[c]={});var h=g[d]||0;e.forEach(function(a,b){a.id=b+h}),g[d]=h+e.length,fs.appendFile(b._filePath(c,d),JSON.stringify(e).slice(1,-1)+",",function(a){if(a)throw a;f&&f()})}},load:function(a){var b,c=this,d=a.done,e=a.streamId,f=a.eventId,g=a.ids||(b=!0),h=a.mapper,i=function(a){c._event={streamId:e,eventId:f,data:a},d(b?h?a.map(h):a:g.map(function(b){return h?h(a[b]):a[b]}))};c._event&&c._event.streamId===e&&c._event.eventId===f?i(c._event.data.slice(0)):fs.readFile(c._filePath(e,f),"utf8",function(a,b){if(a)return void d([],a);try{b=JSON.parse("["+b.slice(0,-1)+"]")}catch(c){return void d([],c)}i(b)})},pack:function(a){var b=this;try{var c=require("archiver"),d=c("zip"),e=b._sessionId+"-saved",f=path.join(b._root,e+".zip"),g=fs.createWriteStream(f);g.on("close",function(){a.done({file:f})}),d.on("error",function(b){a.error(b.message)}),d.pipe(g),d.append(JSON.stringify({browser:a.browser,sessionId:b._sessionId,traceFolder:e,contextEvents:a.contextEvents,scriptCache:a.scriptCache,functionCallIndex:a.functionCallIndex,fileDependencyIndex:a.fileDependencyIndex,fileIdToUrlCache:a.fileIdToUrlCache}),{name:"session.json"}),d.bulk([{expand:!0,cwd:b._location,src:["**"]}]),d.finalize()}catch(h){a.error(h&&h.message)}},unpack:function(a){var b=this;try{var c=new AdmZip(a.file),d=path.basename(a.file,".zip");c.extractAllTo(path.join(b._root,d),!0);var e=path.join(b._root,d,"session.json");delete require.cache[require.resolve(e)];var f=require(e);if(f.browser!==a.browser){var g=a.browser?"browser":"node.js",h=f.browser?"browser":"node.js";return void a.error("Invalid attempt to load "+h+" saved session in "+g+" session")}b._sessionId=f.sessionId,b._location=path.join(b._root,d)}catch(i){return void a.error(i&&i.message)}a.done({scriptCache:f.scriptCache,fileIdToUrlCache:f.fileIdToUrlCache,contextEvents:f.contextEvents,functionCallIndex:f.functionCallIndex,fileDependencyIndex:f.fileDependencyIndex,id:f.sessionId})},clear:function(){var a=this;a._event=null,a._streamContexts={}},dispose:function(){var a=this;a.clear(),a._deleteFolderRecursiveSync(a._location),a._streamContexts=null},_filePath:function(a,b){var c=this;return path.join(c._location,c._sessionId+"_"+a+"_"+b+".json")},_deleteFolderRecursiveSync:function(a){var b=this,c=[];fs.existsSync(a)&&(c=fs.readdirSync(a),c.forEach(function(c){var d=a+"/"+c;fs.statSync(d).isDirectory()?b._deleteFolderRecursiveSync(d):fs.unlinkSync(d)}),fs.rmdirSync(a))}}),module.exports=FileSystemSessionStore;