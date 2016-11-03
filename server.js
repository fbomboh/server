var http = require('https'),
    port = 6001;

function handle(req, res) {
    console.log('requete');
    res.end('<!DOCTYPE html><html><head><title>blabla</title></head><body><h1>hello</h1></body></html>');
}
var server = http.createServer(handle);

server.listen(port, function () {
    console.log("Server listening on: http://localhost:%s", port);
})