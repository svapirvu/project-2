const express = require('express')
const categ = require("../controllers/categories.json")
const prod = require('../controllers/products.json')
const https = require('https')
const app = express()
const fs = require('fs')
const router = express.Router();
/* const {errorHandler} = require('./errorhandler.js') */


router.get('/categories', (req, res) => {
    res.status(200).send(categ);
})

router.get('/categories/:id', (req, res) => {
    const gvnid = parseInt(req.params.id);
    const filtered = categ.filter(item => {
        if (gvnid === item.id) {
            return true;
        }
        else {
            return false;
        }
    })
    res.json(filtered);
});


router.get('/products', (req, res) => {
    res.json({ data: prod });
});

router.get('/products/:id', (req, res) => {
    const gvnids = parseInt(req.params.id);
    const filtereds = prod.filter(itm => {
        if (gvnids === itm.id) {
            return true;
        }
        else {
            return false;
        }
    })
    res.json(filtereds);
})

app.use(router);
// app.use(errorHandler);

const server = https.createServer({
    key: fs.readFileSync('./server.key'),
    cert: fs.readFileSync('./server.cert')
}, app);
server.listen(5000);

module.exports = app;