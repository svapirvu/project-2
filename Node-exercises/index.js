const program = require('commander');
const add = require('./src/addproduct');
const show = require('./src/displayproduct')
var inquirer = require('inquirer');
const uuidv1 = require('uuid/v1');
const dlt = require('./src/deleteproduct');

program
    .command('add')
    .description('add a product')
    .action(function (cmd) {
        inquirer
            .prompt([
                {
                    name: 'productname',
                    message: 'Enter your product name:',
                },
                {
                    name: 'price',
                    message: 'Price:',
                },
                {
                    name: 'Description',
                    message: 'Descr:',
                }
            ])
            .then(answers => {
                answers.id =uuidv1();
                add(answers);

            });
    });
program
    .command('show')
    .description('Show the list of products')
    .action(function (cmd) {
        console.log(show());
    }); 

program
    .command('dlt')
    .description('Delete a product') 

program.parse(process.argv)


