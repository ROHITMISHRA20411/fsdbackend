const express = require('express');
const fs=require('fs/promises');
const app = express();
app.use(express.json());
let users=[];
const readdata=async()=>{
   users=await JSON.parse(fs.readFileSync('./data.json','utf-8'));
}
const writedata=async()=>{
    await fs.writeFileSync('./data.json',JSON.stringify(users),'utf8');
}
app.get('/users', (req, res) => {
    res.json(users);
  });

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/users', (req, res) => {
    const data = req.body;
    const newid=users.length>0?users[users.length-1].id+1:1;
    data.id=newid;
    users.push(data);
    res.status(200).json({message: 'data received!',data:data});
    });
app.listen(9000, () => {
    console.log('Server start on port 9000');

});
