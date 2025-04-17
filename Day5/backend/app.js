const express = require('express');
const fs=require('fs');
const app = express();
app.use(express.json());
let users=[];

app.get('/users', (req, res) => {
    users= JSON.parse(fs.readFileSync('./data.json','utf-8'));
    res.json(users);
  });

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/users',async (req, res) => {
    users= JSON.parse(fs.readFileSync('./data.json','utf-8'));
    const data = req.body;
    const newid=users.length>0?users[users.length-1].id+1:1;
    users.push({id:newid,...data});
     fs.writeFileSync('./data.json',JSON.stringify(users,null,2));
    res.status(200).json({message: 'data received!',data:data});
    });
app.listen(9000, () => {
    console.log('Server start on port 9000');

});
