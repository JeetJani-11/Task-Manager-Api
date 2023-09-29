// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

const {MongoClient , ObjectID} = require('mongodb')

// const id = new ObjectID()
// console.log(id.id.length) 
// console.log(id.toHexString().length) 
// console.log(id) 
// console.log(id.getTimestamp()) 

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'
MongoClient.connect(connectionUrl , {useNewUrlParser: true } , (error ,client)=>{
    if(error){
        return console.log('Unable to connect to databse')
    }
    const db = client.db(databaseName)

    // db.collection('users').deleteMany({
    //     age : 18
    // }).then((result) =>{
    //     console.log(result)
    // }).catch((error) =>{
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        description : 'To do task..'
    }).then((result) =>{
        console.log(result)

    }).catch((error) =>{
        console.log(error)
    })
    
    console.log('Connected Correctly!')
    
})





// db.collection('users').updateOne({
//     _id : new ObjectID("64fe0953d7e1504fdc5c8563")
// } , {
//     // $set :{
//     //     name : 'Pratham' ,
//     //     age : 16
//     // }
//     $inc : {
//         age : 1
//     }
// }).then((result) =>{
//     console.log(result)
// }).catch((error) =>{
//     console.log(error)
// })

// db.collection('tasks').updateMany({
//     completed : false
// }  , {
//     $set : {
//         completed : true 
//     }
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })






// // db.collection('users').findOne({ _id : new ObjectID("64fe15d9e0074e4f50ce8de8")} , (error , user)=>{
// //     if(error){
// //         return console.log("Unable to read the data")
// //     }

// //     console.log(user)
// // })

// // db.collection('users').find({age : 18}).toArray((error , users) =>{
// //     console.log(users)
// // })
// // db.collection('users').find({age : 18}).count((error , count) =>{
// //     console.log(count)
// // })

// db.collection('users').findOne({_id : new ObjectID("64fe15d9e0074e4f50ce8de8")} , (error ,user) =>{
//     console.log(user)
// })

// db.collection('tasks').find({completed : false}).toArray((error , tasks) =>{
//     console.log(tasks)
// })



// db.collection('users').insertOne({
//     _id : id ,
//     name : "Nimesh" ,
//     age :  53
// } , (error , result) =>{
//     if(error){
//         return console.log("Unable to insert user")
//     }

//     console.log(result.ops)
// })

// db.collection('users').insertMany([
//         {
//             name : 'Aastha' ,
//             age : 23 
//         } ,
//         {
//             name : 'Preeti' ,
//             age : 49
//         }
//     ] , (error , result)=>{
//         if(error){
//             return console.log("Unable to insert user")
//         }

//         console.log(result.ops)
//     }

// )

// db.collection('tasks').insertMany([
//     {
//         description : 'To think complete task..',
//         completed : true
//     },{
//         description : 'To do task..',
//         completed : false    
//     },{
//         description : 'To complete task..',
//         completed : false
//     }
// ] , (error , result) =>{
//     if(error){
//         return console.log("Unable to insert user") 
//     }

//     console.log(result.ops)
// })