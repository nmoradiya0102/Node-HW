// const express = require("express");
// // const bodyParser = require("body-parser");
// // const cors = require("cors");
// const http = require("http");
// const { connectDB } = require("./db/dbconnection");
// const routes = require("./routes");
// // require("./helpers/crons");
// const config = require("./config/config");

// const app = express();

// // app.use(bodyParser.urlencoded({ extended : false}));
// // app.use(bodyParser.json());

// // app.use(cors());
// // app.options("*" , cors());

// app.use("/v1", routes);

// /** whenever route not created and you try to use that route then throw error. */
// // app.use((req, res, next) => {
// //   next(new Error("Route not found!"));
// // });

// // database connection
// connectDB();

// /** create server using http */
// const server = http.createServer(app);

// server.listen(config.port, () => {
//   console.log("server listning port number !"+ config.port);
// });


// // const server = http.createServer((req ,  res ) => {
// //   res.end("Hello from the other sides");
// // });
// // server.listen(8000 ,"127.0.0.1" , () => {
// //   console.log("listening to the port no 8000");
// // });




const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http");
const { connectDB } = require("./db/dbconnection");
const routes = require("./routes");
require("./helpers/crons");
const config = require("./config/config");

const app = express();

app.use(bodyParser.urlencoded({ extended : false}));
app.use(bodyParser.json());

app.use(cors());
app.options("*" , cors());

app.use("/v1", routes);

/** whenever route not created and you try to use that route then throw error. */
app.use((req, res, next) => {
  next(new Error("Route not found!"));
});

// database connection
connectDB();

/** create server using http */
const server = http.createServer(app);

server.listen(config.port, () => {
  console.log("server listning port number !"+ config.port);
});