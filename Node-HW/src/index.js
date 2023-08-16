// let http = require('http');
// let fs = require('fs');
// http.createServer(function(req,res){
//     fs.readFile('test.html', function(err, data) {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         return res.end();
//       });
// }).listen(1080);

const http = require('http');
const express = require("express");
const { connectDb } = require("./db/dbconnection");
const routes = require("./routes/index.js");
const config = require("./config/config");

connectDb();


/** create server using http */
const server = http.createServer(app);

server.listen(config.port, () => {
  console.log("server listning port number 3000!");
});