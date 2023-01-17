const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const accountRoutes = require("./routes/account");
const bankRoutes = require("./routes/bank");
// const { listBankController, createBankController, updateBankController, deleteBankController, createAccountController, listAccountController } = require('./controllers')
const server = express();
//middlewares
server.use(bodyParser.json());

//routes
server.use(accountRoutes);
server.use(bankRoutes);
mongoose.set("strictQuery", true);
mongoose
  .connect(
    "mongodb+srv://benjiaelo:pCX5sZ0IFrd3qzXR@cluster0.46rgtnj.mongodb.net/bank?retryWrites=true&w=majority"
    // { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((res) => {
    server.listen(3000, () => console.log("Server is ready"));
  })
  .catch((err) => console.log(err));

//Running the server
