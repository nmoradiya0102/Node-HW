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
const bodyparser = require("body-parser");
const cors = require("cors");
const { connectDB } = require("./db/dbconnection");
const routes = require("./routes/index.js");
require("./helpers/crons");
const config = require("./config/config");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyparser.urlencoded({ extended : false}));
app.use(bodyParser.json());

app.use(cors());
app.options("*" , cors());

app.use("/v1", routes);


/** whenever route not created and you try to use that route then throw error. */
app.use((req, res, next) => {
  next(new Error("Route not found!"));
});

connectDB();

/** create server using http */
const server = http.createServer(app);

server.listen(config.port, () => {
  console.log("server listning port number 3000!");
});


// const server = http.createServer((req ,  res ) => {
//   res.end("Hello from the other sides");
// });
// server.listen(8000 ,"127.0.0.1" , () => {
//   console.log("listening to the port no 8000");
// });