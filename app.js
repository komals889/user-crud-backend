const express = require('express')
const app = express()
const env=require("dotenv")
 
env.config({path:"./config/.env"})
const db=require("./config/db")
db()

app.use(express.json())

const cors=require("cors")
app.use(cors())

const user=require("./routes/user-routes")
// http://localhost:5000/api/v1/
app.use("/api/v1",user)

 
app.listen(process.env.PORT || 5000, () => console.log(`http://localhost:${process.env.PORT}`))