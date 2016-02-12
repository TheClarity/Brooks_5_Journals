/*
 * spy-js - v2.0.0
 * http://spy-js.com
 * Copyright (c) 2013-2015 JetBrains - All Rights Reserved.
 *
 * This source code file is a part of spy-js plugin.
 */
var path=require("path"),httpProxy=require("http-proxy"),httpRequest=require("request"),urlUtil=require("url"),fs=require("fs"),zlib=require("zlib"),iconv=require("iconv-lite"),_=_spy_js._,tracerCode="window.__p = window.__p || {};"+fs.readFileSync(path.join(__dirname,"tracerDependencies.js"))+"(function(global){var module = {};"+fs.readFileSync(path.join(__dirname,"evaluator.js"))+"global.__p.evaluator=module.exports;})(window);"+fs.readFileSync(path.join(__dirname,"tracer.js")),proxyUtil={handle:function(a,b,c){var d=new httpProxy.HttpProxy({target:{host:a.parsedUrl.hostname,port:a.parsedUrl.port||80},enable:{xforward:!1}});a.url=a.parsedUrl.path,c&&d.on("proxyResponse",function(a,b,d){c(d),b.speciallyHandled=!0}),d.on("proxyError",function(a,b,c){if(!c.speciallyHandled){console.log("proxy connection issue: "+a.message,b.parsedUrl);try{c.end()}catch(d){}}}),d.proxyRequest(a,b)},setJsHeaders:function(a,b){b||a.set("Content-Type","text/javascript; charset=UTF-8"),a.set("Cache-Control","no-cache, no-store, must-revalidate"),a.set("Pragma","no-cache"),a.set("Expires","0"),a.set("Access-Control-Allow-Origin","*")},handleBySession:function(a,b,c){var d=this,e="GET"===b.method,f=a.mapScript(b.url);b.url=f.url,a.trackReferer(b.parsedUrl.hrefNoHash,b.parsedRefererUrl.hrefNoHash),a.containsScript(f)&&e?a.getScript(f,function(a){proxyUtil.setJsHeaders(c),c.send(a)}):(b.headers&&(delete b.headers["if-modified-since"],delete b.headers["if-none-match"]),proxyUtil.handle(b,c,function(g){try{var h=!1,i=_.str.endsWith(b.parsedUrl.pathname,".js"),j=g.headers["content-type"];a.specialEncoding(b.parsedUrl.hrefNoHash,d._parseCharset(j));var k=e&&(j?_.str.include(j,"javascript"):(h=!0,i));return k?(h&&a.warn("["+f.url+"] has no Content-Type response header, but looks like javascript, so spy-js will try to process it as javascript. To avoid possible issues, make sure that your web server sets correct Content-Type for your scripts"),proxyUtil.requestJsFile(a,a.getEncoding(b.parsedRefererUrl.hrefNoHash),g,c,function(e,i){if(e)a.error(e),c.status(500),c.headers=g.headers,c.send("Server error occurred");else{if(c.status(g.statusCode),c.headers=g.headers,proxyUtil.setJsHeaders(c,h),!a.serverHost()){var j=b.socket.address();a.serverHost("http://"+("127.0.0.1"===j.address||"::1"===j.address?"localhost":j.address)+":"+j.port)}var k=function(b){a.setScript(i,f,b,function(a){c.send(a)})};if(a.sourceMapLookupEnabled()){var l=d._getSourceMapUrl(g.headers||[],i);l?d._getSourceMapAndOriginalSourceFiles(urlUtil.resolve(b.parsedUrl.href,l),a,k):k()}else k()}}),!0):(i&&e&&a.warn("["+f.url+"] looks like javascript, but has ["+j+"] in Content-Type header and will not be traced. To avoid possible issues, make sure that your web server sets correct Content-Type for your scripts"),!1)}catch(l){a.error(l)}}))},_getSourceMapUrl:function(a,b){var c=a["X-SourceMap"]||a.SourceMap;if(!c){var d=b.match(/[\r\n]\/\/(?:@|#)[ \t]sourceMappingURL=[ \t]*(?:file:\/\/)?([^\r\n]*)\s*(?:\\*\/\s*)?$/);c=d&&d[1]}return c},_getSourceMapAndOriginalSourceFiles:function(a,b,c){var d=this,e=d._isDataUrl(a);d._getFile(a,b,function(f){if(f)try{var g=JSON.parse(f),h=g.sources.length,i=[];_.each(g.sources,function(f,j){var k=e?f:urlUtil.resolve(a,f);d._getFile(k,b,function(a){h--,i[j]={code:a,url:k},h||c({map:g,files:i})})})}catch(j){b.error({message:"File "+(e?"":a)+" is not a valid raw source map JSON",err:j}),c()}else c()})},_getFile:function(a,b,c){this._isDataUrl(a)?c(new Buffer(a.substr(29),"base64").toString("utf8")):httpRequest.get(a,function(d,e,f){if(d||200!==e.statusCode){var g="Can not get file from "+a+", status code: "+(e&&e.statusCode);d&&d.message&&(g+=", error: "+d.message),b.info(g),c()}else c(f)})},_isDataUrl:function(a){return a&&_.str.startsWith(a,"data:application/json;base64,")},_parseCharset:function(a){if(!a)return null;var b=a.match(/charset=([^;]*)/);return b?b[1]:null},requestJsFile:function(a,b,c,d,e){var f,g=d.write,h=d.end,i=d.setHeader,j=d.writeHead,k=d.writeContinue,l=d.setTimeout,m=d.removeHeader,n=d.addTrailers;d.write=function(){},d.end=function(){},d.setHeader=function(){},d.writeHead=function(){},d.writeContinue=function(){},d.setTimeout=function(){},d.removeHeader=function(){},d.addTrailers=function(){};var o=function(){d.write=g,d.end=h,d.setHeader=i,d.writeHead=j,d.writeContinue=k,d.setTimeout=l,d.removeHeader=m,d.addTrailers=n},p=c.headers["content-encoding"];if("gzip"==p){var q=zlib.createGunzip();c.pipe(q),f=q}else if("deflate"==p){var r=zlib.createInflateRaw();c.pipe(r),f=r}else p&&a.info("possibly not supported encoding: "+p),f=c;var s=!0,t=[];f.on("data",function(a){t.push(a),!s||a instanceof Buffer||(s=!1)}),f.on("end",function(){o();var a,c="";if(t.length){a=s?Buffer.concat(t):t.join("");try{c=iconv.decode(a,b)}catch(d){c=a.toString("utf8")}}e(null,c)}),f.on("error",function(a){o(),e(a,null)})},handleSpecialResources:function(a,b,c,d){return _.str.include(a.url,"spy-js-tracer.js")?(b.set("Content-Type","application/javascript"),b.send(tracerCode),!0):_.str.include(a.url,"spy-js-proxy.pac")?(b.set("Content-Type","application/x-ns-proxy-autoconfig"),b.send('function FindProxyForURL(url, host) { return "PROXY localhost:'+d+'; DIRECT"; }'),!0):_.str.include(a.url,"ui-event-handler")?(c(),!0):!1}};module.exports=proxyUtil;