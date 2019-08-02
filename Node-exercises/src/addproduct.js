var fs = require("fs");

const prod = (answers) => {
            fs.readFile("filestowrite/tryit.json",(err,data)=> {
                if (err) return console.log(err);
                let parsed = JSON.parse(data);
                parsed[`product_${answers.id}`] = answers;
                fs.writeFile("filestowrite/tryit.json", JSON.stringify(parsed), (err) => {
                    if (err) return console.log(err);
                    console.log("Successfully Written to File.");
                });
            })            
        };


module.exports = prod;