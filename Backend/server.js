const express = require("express");
const {chats} = require("./Data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");
const userRouter = require("./routers/userRouter");
const cors = require('cors');
dotenv.config();
const {notFound,errorHandler} = require("./middleware/errorMiddleware")

connectDB();
const app = express();
app.use(express.json());
app.use(cors());






app.get("/",(req,res)=>{
    res.send("Hello I am here Manasi ");
})

app.use("/api/user",userRouter);



app.get("/api/chat",(req,res)=>{
    res.send(chats);
})

app.get("/api/chat/:_id",(req,res)=>{
//console.log(req.params.id);
const singleChat = chats.find((c)=> c.id === req.params.id);
res.json(singleChat);
//console.log(req);
})

app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port 5000 at http://localhost:${PORT}`.red));


