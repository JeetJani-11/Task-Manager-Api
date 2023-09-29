const express = require('express')
const  bodyParser = require('body-parser')
require('./db/mongoose')


const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const app = express()

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
const port = process.env.PORT || 3000


app.listen(port , () =>{
    console.log("Server is up on port " + port)
})
