const http = require("http");
const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        "content-type":"text/html"
    });
    res.end("<h1>HELLO FROM NDEEJS DOCKER CONTAINER</h1>");
});
server.listen(3000,()=>{
    console.log("NODE JS RUNNING ON PORT 3000");
});