/*
 * spy-js - v2.0.0
 * http://spy-js.com
 * Copyright (c) 2013-2015 JetBrains - All Rights Reserved.
 *
 * This source code file is a part of spy-js plugin.
 */
require("./lib/global");var path=require("path"),module=require("module"),modulePrototype=module.Module.prototype,originalRequire=modulePrototype.require,nativeModule=function(){process.binding("natives").native_module={};var a=originalRequire("native_module");return delete process.binding("natives").native_module,a}(),nativeModulesToLoadSeparately=["path","fs","child_process","events","util","net"],localSystemModuleCache=nativeModulesToLoadSeparately.reduce(function(a,b){return a[b]={},a},{}),baseFolder=path.normalize(path.join(__dirname,".."));modulePrototype.require=function(a){var b=this.id&&0===this.id.indexOf(baseFolder),c=localSystemModuleCache[a];return!global._forceNormalRequire&&b&&c?(c.loaded||(c.value=originalRequire.call(this,a),c.loaded=!0,delete nativeModule._cache[a]),c.value):originalRequire.call(this,a)},nativeModulesToLoadSeparately.forEach(function(a){require(a)});var program=require("commander");program.unknownOption=function(){},program.option("--spyJsServerPort <spyJsServerPort>","specify port").option("--spyJsTracedApp <spyJsTracedApp>","specify application").option("--spyJsChildProc <spyJsChildProc>","specify if child proc").option("--spyJsSendInterval <spyJsSendInterval>","specify send interval").parse(process.argv);var options={node:!0};program.spyJsServerPort&&(options.port=program.spyJsServerPort),program.spyJsTracedApp&&(options.app=program.spyJsTracedApp),program.spyJsChildProc&&(options.childProcess="true"===program.spyJsChildProc),program.spyJsSendInterval&&(options.sendInterval=parseInt(program.spyJsSendInterval,10)),options.currentSpyArgs=process.argv.slice(1,5),require("semver").gt(process.versions.node,"0.10.5")?require("./lib/app").start(options):console.error("Node.js version that you are running ("+process.versions.node+") is less than minimal required for spy-js (v0.10.6). You can download minimal required or newer version from http://nodejs.org/dist/ and upgrade your main node.js version or install and use the downloaded version just for spy-js side by side with your main one.");