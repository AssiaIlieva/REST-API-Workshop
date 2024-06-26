const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors({
    
    origin:'http://localhost:3000'
}));

app.use(express.json());



app.get('/data/catalog', (req, res) => {
    res.json([])
});

app.use(routes);


app.listen(3030, () => console.log('server is listening on port 3030...'));