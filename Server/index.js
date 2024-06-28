const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

app.use(cors({
    
    origin:'http://localhost:3000'
}));

app.use(express.json());


app.use(routes);

mongoose.connect('mongodb://127.0.0.1:27017/furniture')
    .then(() => console.log('DB Connected'));


app.listen(3030, () => console.log('server is listening on port 3030...'));