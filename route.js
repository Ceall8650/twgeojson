function route (handle, pathname) {
	// body...
	console.log("About to route a request for " + pathname);
	if( typeof handle[pathname] === 'function'){
		return handle[pathname]();
	}
	else{
		console.log("No request handler found for " + pathname);
		return {"content": "404  Not found", "type": "text/plain"}
	}
}

exports.route = route;