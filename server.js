const express = require('express')
const app = express();
const cart = require('./cart-items');
const port = 8888;


app.use(express.json());
app.use(express.static('./cart'));
app.use('/cart', cart);

app.listen(port);