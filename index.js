var server = require("./server.js")
var route = require("./route.js")
var requestHandlers = require("./requestHandlers.js") 


var handle = {}
handle["/"] = requestHandlers.start;
handle["/server"] = requestHandlers.start;
handle["/taiwangeo"] = requestHandlers.taiwangeo
handle["/county.json"] = requestHandlers.country	
handle["/public/taiwangeo"] = requestHandlers.taiwangeo

server.start(route.route, handle);
// module.exports = {};