"use strict";importScripts("/sw-toolbox.js"),self.toolbox.options.cache={name:"precache-mix"},self.toolbox.precache(["/test/data/files/text.txt",Promise.resolve("/test/data/files/text-1.txt"),["/test/data/files/text-2.txt",Promise.resolve("/test/data/files/text-3.txt")],["/test/data/files/text-4.txt",Promise.resolve("/test/data/files/text-5.txt")]]);
