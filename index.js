const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const app= express(); 
const url= 'mongodb://127.0.0.1:27017/Crud';

// const app = express();
mongoose.connect(url, {useNewUrlParser:true});
const con = mongoose.connection;

con.on('open',function(){
    console.log('connected successfully...');
})

app.use(express.json());


// const {handleputrequest,handlecreateuser} = require('./controller.js');
const route= require('./route');
app.use('/route',route);

app.use(bodyparser.json());



// function handlegetrequest(req,res){
//     console.log('get request..');
//     // res.send('get request...');
// }

// function handlepostrequest(req,res){
//     const body = req.body;
//     console.log(body);
//     body.name = 'server';
//     res.send(body);
// }

// app.get('/', handlegetrequest);
// app.post('/',handlepostrequest);
// app.put('/',handleputrequest);
// app.post('/user/create',handlecreateuser);


app.listen(3000, () =>{
    console.log('Our server has started at the port 3000');
})
