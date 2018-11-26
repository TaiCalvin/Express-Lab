const express = require('express');
const router = express.Router();
const pool = require('./db');

router.get('/', (req, res) => {
    pool.query('select * from cart').then(result => {
        res.send(result.rows);
    });
});

router.post('/', (req, res) => {
    const sql = 'insert into cart (product, price, quantity) values($1::text, $2::real, $3::int)';
    const values = [req.body.product, req.body.price, req.body.quantity];
    pool.query( sql, values).then(result => pool.query('select * from cart').then(result => pool.query('select * from cart').then(result => {
        res.send(result.rows);
    })));
});

router.get('/:id', (req, res) => {
    pool.query(`select * from cart where id=${req.params.id}`).then(result => pool.query('select * from cart').then(result => {
        res.send(result.rows);
    }));
});

router.delete('/:id', (req, res) => {
    pool.query(`delete from cart where id=${req.params.id}`).then(result => pool.query('select * from cart').then(result => {
        res.send(result.rows);
    }));
});

module.exports = router;