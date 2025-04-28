const express = require('express')
const app = express()
const cors = require('cors')
const connectDB = require('./db')
const route = require('./expenses.routes')

app.use(express.json())
app.use(cors('*'))
app.use('/api',route)

app.listen(5000,async()=>{
    try{
        await connectDB()
        console.log("The server is running on port 5000")
    }catch(error){
        console.error(error.message)
    }
})