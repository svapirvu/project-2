const http = require("http");
const fs = require("fs")
http.
    createServer((req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        if (/^(\/)categories$|(\/)$/gi.test(req.url)){
            categTest(req, res);
            if (/^(\/)products$|(\/)$/gi.test(req.url)){
                prodTest(req, res);
            }
        }
        else{
            render("Invalid URL");
        }
    })
    .listen(5000)

const categTest = (req, res) => {
        res.writeHead(200, 'Content-Type: application/json');
        const categ = fs.createReadStream(__dirname + '/categories.json');
        categ
            .on('data', chunk => console.log(chunk))
            .pipe(res);
}

const prodTest = (req, res) => {
        res.writeHead(200, 'Content-Type: application/json');
        const prod = fs.readFile(__dirname + '/products.json', (err,data) =>{
            if (err) {
                throw err;
            }
            const prodList = JSON.parse(data);
            const firstTenProd = prodList.slice(0,10);
            res.end(JSON.stringify({data: (firstTenProd)}));
        });
    }