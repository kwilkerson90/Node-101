// console.log("Hello World, I am in Node");

/*
Node.js HTTP Module
    -Node.js has a built-in module called HTTP; this allows node.js to transfer data over the 
    Hyper Text Transfer Protocol (HTTP)
    -to use the HTTP module, use the require() method
        - const http = require('http');


*/

//create a "hello world" server using the http module that starts a server and returns plain text

// const http = require("http");

// //create a server object:
// http.createServer(function (req, res) { 
//     //http.createServer() method turns your computer into an HTTP server
//     //it also creates an HTTP Server object 
//     //HTTP Server object can listen to ports on your computer and execute a function,
//         //a requestListener, each time a request is made 
//     res.write("Hola Mundo!"); 
//     res.end(); //used to end the response process 
// }).listen(8080); //port 8080 is an alternative HTTP port used for web traffic 

//the function passed into the http.createServer() method will be executed when someone tries to access the 
//computer on port 8080

//the function passed into the http.createServer() has a req argument
    //this argument represents the request from the client as an object (http.IncomingMessage object)
    //the object has a property called "url" that holds the part of the url that comes after the domain name 


// const cowsay = require("cowsay");

// console.log(cowsay.say({
//     text: "Chic-fil-a, Hire Me!",
//     e: "oO",
//     T: "U"
// }));


/*DNS Lookup

Write a program that prompts the user for a domain name, looks up the IP address for the domain, and prints it out 

const dns = require("dns");
const twitter = dns.lookup('twitter.com', function (err, addresses, family) {
    console.log(addresses);
});

*/

/*
Write a program that prompts the user to enter a file name, and reads in the contents of the file, convert
the text to all caps, and prints it out.

There are two Node modules that will help with this exercise, readline and fs.
    -readline: provides a way of reading a datastream, one line at a time 
    -fs: allows you to work with the file system on your computer
    -common use:
        -read files
        -create files 
        -update files
        -delete files
        -rename files 

*/

/*
const readline = require('readline');
const fs = require('fs');

const kensInterface = readline.createInterface({
    input: fs.createReadStream("text.txt")

});

let lineno = 0;
kensInterface.on('line', function (line) {
    lineno++;
    console.log('Line number ' + lineno + ': ' + line.toUpperCase());
});

*/

/*


Write a program to prompt the user for two file names
    -first file will be the input
    -second file will be the output
The program will read the contents of the input file,
convert its text to all caps, then write the resulting contents 
to the output file


*/

// const fs = require('fs');

// fs.appendFile('output.txt', 'This cant be life. This cant be love.'.toUpperCase(), function (err) {
//     if (err) throw err;
//     console.log('Did that');
// });



// ERROR

// const fs = require('fs');

// fs.writeFile('thisdirdoesntextist/output.txt', 'This cant be life. This cant be love.', function (err, data) {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(data);
// });


// -having issues with this part of the exercise
//     -text is written to the output file, but I'm having trouble trying to pull text from the input file and add it to the output file

