!function(){function e(){var e=a?Navigator.prototype:navigator;Object.defineProperty(e,"onLine",i),window.navigator.onLine&&window.dispatchEvent(new CustomEvent("online"))}function n(){var e=a?Navigator.prototype:navigator;Object.defineProperty(e,"onLine",{value:!1}),window.dispatchEvent(new CustomEvent("offline"))}function o(e,n,o,t){return new Promise(function(r,i){var a=indexedDB.open(e,n);a.onerror=i,a.onsuccess=function(){var e=a.result,n=e.transaction(o,"readonly"),c=n.objectStore(o);a=c.get(t),n.oncomplete=function(){r(a.result),e.close()},n.onabort=n.onerror=function(n){i(n),e.close()}}})}function t(e,n,o,t,r){return new Promise(function(i,a){var c=indexedDB.open(e,n);c.onerror=a,c.onsuccess=function(){var e=c.result,n=e.transaction(o,"readwrite"),s=n.objectStore(o);c=s.put(r,t),n.oncomplete=function(){i(c.result),e.close()},n.onabort=n.onerror=function(n){a(n),e.close()}}})}function r(e){return new Promise(function(n,o){var t=indexedDB.deleteDatabase(e);t.onsuccess=n,t.onerror=o,t.onblocked=function(){console.warn("Deleting database blocked. Is there a connection leak?"),n()}})}var i=Object.getOwnPropertyDescriptor(Navigator.prototype,"onLine"),a=null!=i;a||(i=Object.getOwnPropertyDescriptor(navigator,"onLine")),window.appStorageTestHelpers={restoreNavigatorOnLine:e,goOffline:n,getIdbObjectStoreValue:o,setIdbObjectStoreValue:t,deleteIdbDatabase:r}}();
