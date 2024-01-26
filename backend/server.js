import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";

// express app
const app = express();

// middleware
app.use(express.json())
app.use(cors())

// DataBase Connection
mongoose.connect("mongodb+srv://lityer:123@cluster0.jla8m8u.mongodb.net/orderbook?retryWrites=true&w=majority")
.then(()=>{
    console.log("connected-DB");
   })
.catch((e)=>{console.log(e)});

 // Use the userRouter as middleware
 app.use('/user', userRouter);


 app.get('/', (req, res)=>{
   res.json({msg: 'app is running'})
 })

// listen for req
app.listen(4000, function () {
   console.log('listening on port 4000')
})