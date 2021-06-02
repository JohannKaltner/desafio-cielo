const express = require("express");
const cors = require('cors');
 /**
   * Retrieve data from json file
   *
   */
const entrieJson = require('./lancamento-conta-cliente.json')

const router = express.Router();

 /**
   * Start Server
   */
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());
  
app.listen(3000,() => {
  console.log("Started on Port 3000");
})

/**
* Get Route 
*/
app.get('/entry-control', function (req, res) {
  res.json(entrieJson)
})

 /**
   * Add router in the Express app.
   */
app.use("/", router);