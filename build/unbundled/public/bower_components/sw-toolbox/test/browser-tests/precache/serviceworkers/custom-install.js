"use strict";importScripts("/sw-toolbox.js"),self.addEventListener("install",function(t){t.waitUntil(caches.open("precache-custom-install").then(function(t){return t.add("/test/data/files/text-2.txt")}))}),self.toolbox.options.cache={name:"precache-custom-install-toolbox"},self.toolbox.precache(["/test/data/files/text.txt","/test/data/files/text-1.txt"]),self.addEventListener("install",function(t){t.waitUntil(caches.open("precache-custom-install").then(function(t){return t.add("/test/data/files/text-3.txt")}))});