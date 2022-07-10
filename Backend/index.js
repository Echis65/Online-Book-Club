import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors"
import userRoutes from "./Routes/userRoutes.js"

const app = express();
const PORT = 5000;
const CONNECTION_URL = 'mongodb+srv://Echis65:Echisviper65@cluster0.v9sjf1w.mongodb.net/onlineBookClub?retryWrites=true&w=majority'

app.use(bodyParser.json({limit : "30mb", extended:"true"}));
app.use(bodyParser.urlencoded({limit: "30mb", extended : true}))

app.use(cors())
app.get("/users", userRoutes)

mongoose.connect(CONNECTION_URL)
.then(() => {
    console.log(`Server listening on port ${PORT}`)
}).catch(error => {
    console.log(error.message)
})
