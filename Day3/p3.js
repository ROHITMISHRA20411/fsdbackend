const http= require('http');
let Users=[];
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
        User.push(data);
        res.end(JSON.stringify({Message:'Data Received'}));
       });  
    }else if(req.url==='/getdata' && req.method==='GET'){
        res.end(JSON.stringify(Users));
    }else{
        res.end(JSON.stringify({Message:'Page not found'}));
    }
});
   

server.listen(9000,(err)=>{
    if (err){
        console.log(err);
    }else{
        console.log("server started at 9000")
    }
});