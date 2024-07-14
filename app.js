

// const fs = require('fs');
// // Write a file
// fs.writeFileSync('test.txt', 'Hello World!');

// // Append a file
// fs.appendFileSync('test.txt', '\nHello again!');
// // Read a file
// console.log(fs.readFileSync('test.txt').toString());


// // Fetch a file allData1.js

// const x = require('./allData1.js')

// console.log(x.fname)
// console.log(x.lname)
// console.log(x.city)
// console.log(x.mul1(6,7))
// var validator = require('validator');
// console.log(validator.isEmail('saeed@hotmail.com'))

// const x = process.argv[2]

// if (x === 'add') {
//     console.log("you have an item")
// } else if (x === 'remove') {
//     console.log("you have removed an item")
// }
// else {
//     console.log("invalid command")
// }

// console.log(x)

// console.log(yargs.argv)

// const person1 = {
//     fname: 'saeed',
//     lname: 'bawazeer',
//     city: 'riyadh',
// }

// // Convert object to JSON
// const personJSON = JSON.stringify(person1)


// // Convert JSON to object
// const personObj = JSON.parse(personJSON)
// console.log(personJSON)
// console.log(personObj)

// // Save JSON to a file
// const fs = require('fs')
// fs.writeFileSync('person1.json', personJSON)

const data10 = require('./person1')// تحميل الملف اللي فيه الدالة

const yargs = require('yargs')
yargs.command({
    command: "add",
    describe: "add a new item",
    builder: {
        fname: {
            describe: "first name",
            demandOption: true,
            type: 'string'
        },
        lname: {
            describe: "last name",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (x) => {
        // console.log('adding an item')

        data10.addperson(x.id, x.fname, x.lname, x.city)

    }
})



yargs.command({
    command: "delete",
    describe: "to delete an item",
    handler: (x) => {
        // console.log("you have already deleted an item")

        data10.deletePerson(x.id)
    }
})


yargs.command({
    command: "read",
    describe: "to read ",
    builder: {
        id: {
            describe: "this is the id desc in read command",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x) => {
        // console.log("you have already deleted an item")

        data10.readData(x.id)
    }
})



yargs.command({
    command: "list",
    describe: "to show first name and last name",
    handler: (x) => {
        // console.log("you have already deleted an item")

        data10.listData()
    }
})

yargs.parse() 