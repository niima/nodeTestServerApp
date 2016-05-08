//node js server by Nima

var net = require("net");
var nw = require('node-windows');

var server = net.createServer();


server.on("connection", function (socket) {
	var remoteAddress = socket.remoteAddress + ":" + socket.remotePort;
	console.log("new client " + remoteAddress);

	socket.on("data", function (d) {
		console.log("Data from %s: %s" , remoteAddress, d);
        socket.write("Hello " + d);
        
	});

	socket.once("close" , function () {
		console.log("Connection closed from " + remoteAddress);
		console.log("------------------------------------");
	});

	socket.on("error" , function (err) {
		console.log("Connection %s error : %s " ,  remoteAddress , err.message);
	});

});

server.listen(9000, function () {
	console.log("Server listening to %j " , server.address());
    
});












//var http = require('http');

//var data = {
//	"collapseKey": "applice",
//	"delayWhileIdle": true,
//	"timeToLive": 3,
//	"data": {
//		"message": "My message", "title": "My Title"
//	},
//	"registration_ids": ["APA91bF40HFSoQ2HX95EkNgGez9_N40Wvdc6OzMgPa9MArS6uSip6cgE_dCKPstRhKfrQsXP0oZmHkK58tWjDFQHtRuEr-YQDoGDv-W2ZJ9PDgGyWqBBNevQMqKqbbsVEag73RUDJxVgcktxa0eowx705Qu_iTVvdw"]
//};

//var dataString = JSON.stringify(data);
//var headers = {
//	'Authorization' : 'key=AIzaSyAegwWAf003ZarcWRC71HW809nRITriiWs',
//	'Content-Type' : 'application/json',
//	'Content-Length' : dataString.length
//};

//var options = {
//	host: 'android.googleapis.com',
//	port: 80,
//	path: '/gcm/send',
//	method: 'POST',
//	headers: headers
//};

////Setup the request 
//var req = http.request(options, function (res) {
//	res.setEncoding('utf-8');
	
//	var responseString = '';
	
//	res.on('data', function (data) {
//		responseString += data;
//	});
	
//	res.on('end', function () {
//		var resultObject = JSON.parse(responseString);
//		console.log(responseString);
//		console.log(resultObject);
//	});
//	console.log('STATUS: ' + res.statusCode);
//	console.log('HEADERS: ' + JSON.stringify(res.headers));

//});

//req.on('error', function (e) {
//	// TODO: handle error.
//	console.log('error : ' + e.message + e.code);
//});

//req.write(dataString);
//req.end();