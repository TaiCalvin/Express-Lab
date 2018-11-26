const express = require('express')
const cart = require('./cart-items');
const app = express();
const port = 8888;


app.use(express.json());
app.use(express.static('./cart'));
app.use('/cart', cart);

app.listen(port);