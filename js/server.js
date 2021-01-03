const http = require('http');

function start(){
  const html = require('fs').readFileSync('../index.html')
  const server = http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    process.on('uncaughtException', (e) => console.log(e));

    response.end(html);
  })


  server.listen(3000,'127.0.0.1');
  console.log("Server has started");
}

exports.start = start;