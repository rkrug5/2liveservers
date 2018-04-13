var http = require('http');
var PORT = 7000;

function handleRequest(request, response) {
	// response.end("It works!! Path Hit: " + request.url);

	response.end("You are wonderful, Have a great Day.");


}

var server = http.createServer(handleRequest);

server.listen(PORT, function () {
	console.log("Server is listening on: http://localhost:%s", PORT);

})

// var http = require('http');
var PORT2 = 7500;

function handleRequest2(request, response) {
	// response.end("It works!! Path Hit: " + request.url);
	response.end("Why are you even here? Be on your way");


}

var server2 = http.createServer(handleRequest2);

server2.listen(PORT2, function () {
	console.log("Server is listening on: http://localhost:%s", PORT2);

})