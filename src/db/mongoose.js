const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URL , {
    useNewUrlParser: true 
})







// const me = new User({
//     name : '   Jeet     ' ,
//     email  : "TEST@GMAIL.COM" ,
//     password : '           phone098!'
// })

// me.save().then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })

//     const task = new Task({
//     description : "  Solve Challenge 2                        " 
// })
    
    
// task.save().then((result)=>{
//         console.log(result)
//     }).catch((error)=>{
//         console.log(error)
//     })