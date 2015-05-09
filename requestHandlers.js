var fs = require('fs');
var output = {'content': "", 'type': 'text/plain'}

function start () {
	// body...
	output.content = "Hello Start"
	console.log("Request handler 'start' was called.")
	return output;
}

function taiwangeo () {
	// body...
	var html = fs.readFileSync('taiwangeo.html')
	output.content = html
	output.type = 'text/html'
	console.log("Request handler 'taiwangeo' was called.");
	return output;
}

function country (){
	var json = fs.readFileSync('./county.json')
	output.content = json
	output.type = 'application/json'
	console.log("Request handler 'counties.json' was called.")

	return output;
}

exports.start = start
exports.taiwangeo = taiwangeo
exports.country = country