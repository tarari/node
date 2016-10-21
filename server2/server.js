var http=require('http');
var url=require('url');

var server=http.createServer(function(req,resp){
	//parsejem la url a través de objurl
	var objurl=url.parse(req.url);
	console.log('PATH: '+objurl.path);
	console.log('PATHNAME: '+objurl.pathname);
	console.log('QUERY: '+objurl.query);
	resp.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
	resp.write('<!DOCTYPE html><html><head></head>');
	resp.write('<body><h1>Hola Món</h1>');
	resp.write('<h2>'+objurl.pathname+'</h2>');
	resp.write('</body></html>');
	resp.end();
});

server.listen(3000);
console.log('Sevidor iniciat');
