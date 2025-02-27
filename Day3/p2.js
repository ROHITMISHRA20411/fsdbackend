const http= require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'application/json'});
   if (req.url==='/setdata' && req.method==='POST')
    {
       let body='';
       req.on('data', chunk=>{
        body+=chunk;
       });
       req.on('end', ()=>{
        let data=JSON.parse(body);
        console.log(data);
        res.end(JSON.stringify({Message:'Data Received'}));
       });  
    }
});
   

server.listen(9000,(err)=>{
    if (err){
        console.log(err);
    }else{
        console.log("server started at 9000")
    }
});