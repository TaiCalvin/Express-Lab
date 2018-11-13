const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send([{id: '1', product: 'Chips', price: '$1', amount: '1'}]);
})

router.post('/', (req, res) => {
    if(req.body) {
        res.status(201).send(req.body);
    } else {
        res.sendStatus(400);
    }
})

module.exports = router;