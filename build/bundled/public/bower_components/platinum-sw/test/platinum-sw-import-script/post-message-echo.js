self.addEventListener("message",function(e){e.ports[0].postMessage(e.data)});
