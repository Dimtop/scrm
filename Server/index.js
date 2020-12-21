  
//Libraries
const express = require("express");
const cors = require('cors');
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
//Middlewares
const dbConnect = require('./Middlewares/dbConnect');

//Routers 
const userRouter = require("./Routers/user.router");
const ticketRouter = require("./Routers/ticket.router");
const ticketMessageRouter = require("./Routers/ticketMessage.router")
const projectRouter = require("./Routers/project.router")
const purchaseRouter = require('./Routers/purchase.router')
const managerRouter = require("./Routers/manager.router")
//Initiallizing the app
const app = express();

//Configurations
dotenv.config();

//Middleware configuration
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileUpload());
//Routes
app.use("/api/users",userRouter);
app.use("/api/tickets",ticketRouter);
app.use("/api/ticketMessages",ticketMessageRouter);
app.use("/api/projects",projectRouter)
app.use("/api/purchases",purchaseRouter)
app.use("/api/managers",managerRouter)
//Initializing the server
app.listen(process.env.PORT, (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Server is running on: " + process.env.PORT);
        dbConnect(process.env.DB_URI);
     
    }
})