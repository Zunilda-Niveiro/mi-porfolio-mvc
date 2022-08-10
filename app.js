const express = require('express');
const app = express ();
const path = require('path');

app.use(express.static('public'));
app.get('/', (req,res)=> res.sendFile(path.join(__dirname, "views", "home.html")));
app.get('/about', (req,res)=> res.sendFile(path.join(__dirname, "views", "about.html"))); 

app.listen(3000, ()=>{ console.log('Servidor funcionando');
    });