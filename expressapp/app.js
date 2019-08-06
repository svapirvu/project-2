const express = require('express')
const categ = require("./categories.json")
const prod = require('./products.json')
const http = require('http')
const app = express()
const router = express.Router();


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

const server = http.createServer(app);
server.listen(5000);

