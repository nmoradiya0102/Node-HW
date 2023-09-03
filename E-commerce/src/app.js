const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const { connectDB } = require('./db/dbconnection.js');
const router = require('./routes');
require('./helpers/crons');
const config = require('./config/config.js');
// const eCommerceRoutes = require('./routes/eCommerce.route');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/v1', router);

/** whenever route not created and you try to use that route then throw error. */
app.use((req, res, next) => {
  next(new Error("Route not found!"));
});

/** Database connection */
connectDB()

/** create server using http */
const server = http.createServer(app);

server.listen(config.port, () => {
  console.log("Port number "+ config.port + " is Start");
});



app.use(express.static('public'));

