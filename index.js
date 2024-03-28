// importing express
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// client -> server (Request)
// server -> user (Response)
app.get('/', (req,res) => {
    res.send('Hello this is 3000 API Server is killer');
});

app.post('/api/products', (req, res) => {
    res.send('Data Received!');
});

mongoose.connect('mongodb+srv://meshramshubham27:nhfv8qrxaj244dz6@backenddb.akq2ca8.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackEndDB')
.then(() => {
    console.log('Connected to the MongoDB!');
    app.listen(3000, () => {
        console.log('Live on 3000!');
    });
});
