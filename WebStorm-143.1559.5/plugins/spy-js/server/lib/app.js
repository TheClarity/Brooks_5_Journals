/*
 * spy-js - v2.0.0
 * http://spy-js.com
 * Copyright (c) 2013-2015 JetBrains - All Rights Reserved.
 *
 * This source code file is a part of spy-js plugin.
 */
var util=require("util"),SessionNode=require("./sessionNode"),_=_spy_js._;process.on("uncaughtException",function(a){return a&&"spawn"===a.syscall&&"OK"===a.code?void 0:a&&"Cannot switch to old mode now."==a.message?void console.log("attempt to switch to old mode"):void console.error(a instanceof Error?a.message+"\n"+a.stack:util.inspect(a))});var originalProcessExit=process.exit;process.on("SIGINT",function(){originalProcessExit()});var App=function(){this._startedMessage="spy-js has started"};App.prototype.start=function(a){var b=this;if(b._options=_.extend({host:"localhost",port:a&&a.node?3547:3546,node:!1},a||{}),b._options.spyRoot="http://"+b._options.host+":"+b._options.port,!b._options.childProcess){var c=require("express"),d=(require("path"),require("net")),e=c(),f=require("http"),g=require("qs"),h=f.createServer(e);_.str=require("underscore.string");var i=require("./proxyUtil"),j=require("./urlUtil")}if(b._options.node||h.on("connect",function(a,c,e){var f=b._extractHostAndPort(a.url,443),g=a.httpVersion,h=new d.Socket;h.connect(f.port,f.host,function(){h.write(e),c.write("HTTP/"+g+" 200 Connection established\r\n\r\n")}),h.on("data",function(a){c.write(a)}),h.on("end",function(){c.end()}),c.on("data",function(a){h.write(a)}),c.on("end",function(){h.end()}),h.on("error",function(){c.write("HTTP/"+g+" 500 Connection error\r\n\r\n"),c.end()}),c.on("error",function(){h.end()})}),b._options.childProcess||h.on("error",function(a){a&&"EADDRINUSE"==a.code?console.error("Port "+b._options.port+" is already in use (possibly by another running tracing session)"):console.error(util.inspect(a)),b.stop()}),!b._options.node){var k=function(a,c,d){if(!i.handleSpecialResources(a,c,d,b._options.port)){var e,f="",h=j.parse(j.normalizedUrl(a.headers.referer||"")),k=h.query?g.parse(h.query):null;if(a.parsedRefererUrl=h,a.query&&a.query["spy-js"]?e=a.query["spy-js"]:k&&k["spy-js"]&&(e=k["spy-js"],f=a.url),e)e=j.normalizedUrl(e),a.parsedUrl=j.parse(j.join(e,f)),a.url=a.parsedUrl.href,a.headers.host=a.parsedUrl.host;else if(_.str.startsWith(a.url,"/"))return void d();if(b._session&&b._session.active()&&(b._session.global()||e&&_.str.startsWith(e,b._session.root())||a.url&&_.str.startsWith(a.url,b._session.root())||h.href&&_.str.startsWith(h.href,b._session.root()))&&!(h.href&&_.str.contains(h.href,"FDFA6052-1C12-4655-B658-0DBF2414422D")||a.url&&_.str.contains(a.url,"FDFA6052-1C12-4655-B658-0DBF2414422D")))try{i.handleBySession(b._session,a,c)}catch(l){b._session.error(l)}else i.handle(a,c)}},l=function(a,c){return a.body&&b._session&&b._session.active()&&a.body.sessionId==b._session.id()?(b._session.sendBrowserData(c,(a.body||{}).streamContext),void b._session.data(a.body,a.headers["user-agent"],a.headers.referer)):void c.send({})};e.use(c.compress()),e.use(k),e.use(c["static"](__dirname+"/public")),e.use(c.json({limit:"50mb"})),e.use("/ui-event-handler",l)}b._options.childProcess?b._options.node&&new SessionNode({},b._options.app,b._options):h.listen(b._options.port,function(){var a=b._patchedSocketIO().listen(h);a.set("log level",1),a.sockets.on("connection",function(a){a.handshake.browserContext?b._session&&a.handshake.sessionID&&b._session.id()===a.handshake.sessionID&&b._session.newBrowserConnection&&b._session.newBrowserConnection(a.handshake.browserContext,a):b._session?b._session.updateSocket(a):b._session=b._newSession(a)}),a.set("authorization",function(a,b){a.query.browserContext&&(a.browserContext=a.query.browserContext),a.query&&a.query.sessionID?(a.sessionID=a.query.sessionID,b(null,!0)):(a.sessionID=Math.random().toString(36).substr(2,5),b(null,!0))});var c=h.listeners("request").splice(0);h.removeAllListeners("request"),h.on("request",function(a,d){a.parsedUrl=j.parse(a.url),_.str.startsWith(a.url,b._options.spyRoot)&&(a.url=a.parsedUrl.path);for(var e=0,f=c.length;f>e;e++)c[e].call(h,a,d)}),b._options.node?console.log(b._startedMessage):console.log(b._startedMessage+", proxy is available at "+b._options.spyRoot)})},App.prototype._patchedSocketIO=function(){var a=require("socket.io"),b=require("socket.io/lib/manager"),c=require("socket.io/lib/transports/jsonp-polling"),d=/^\d+$/;b.prototype.handleHandshake=function(a,b,c){function e(b,e){a.query.jsonp&&d.test(a.query.jsonp)?(c.writeHead(200,{"Content-Type":"application/javascript"}),c.end("__p.io.j["+a.query.jsonp+'](new Error("'+e+'"));')):(c.writeHead(b,i),c.end(e))}function f(a){e(500,"handshake error"),g.log.warn("handshake error "+a)}var g=this,h=b.headers.origin,i={"Content-Type":"text/plain"};if(!this.verifyOrigin(b))return void e(403,"handshake bad origin");var j=this.handshakeData(a);h&&(i["Access-Control-Allow-Origin"]=h,i["Access-Control-Allow-Credentials"]="true"),this.authorize(j,function(b,h,k){if(b)return f(b);if(h){var l=g.generateId(),m=[l,g.enabled("heartbeats")?g.get("heartbeat timeout")||"":"",g.get("close timeout")||"",g.transports(a).join(",")].join(":");a.query.jsonp&&d.test(a.query.jsonp)?(m="__p.io.j["+a.query.jsonp+"]("+JSON.stringify(m)+");",c.writeHead(200,{"Content-Type":"application/javascript"})):c.writeHead(200,i),c.end(m),g.onHandshake(l,k||j),g.store.publish("handshake",l,k||j),g.log.info("handshake authorized",l)}else e(403,"handshake unauthorized"),g.log.info("handshake unauthorized")})};var e=c.prototype.doWrite;return c.prototype.doWrite=function(){return this.head=this.head.replace("io.j","__p.io.j"),e.call(this,arguments)},a},App.prototype.stop=function(){console.log("spy-js has stopped"),process.exit()},App.prototype._newSession=function(a){var b=this;return b._options.node?new SessionNode(a,b._options.app,b._options):new(require("./session"))(a,new(require("mule").WorkQueue)(__dirname+"/worker.js"))},App.prototype._hostAndPortRegEx=/^([^:]+)(:([0-9]+))?$/,App.prototype._extractHostAndPort=function(a,b){var c=a,d=b,e=this._hostAndPortRegEx.exec(a);return null!=e&&(c=e[1],null!=e[2]&&(d=e[3])),{host:c,port:d}};var app=new App;module.exports={start:function(a){app.start(a)},stop:function(){app.stop()}};