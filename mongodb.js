//CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id.id.length)
// console.log(id.toHexString().length)
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    db.collection('tasks').deleteOne({
        description: "buy food"
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})

    // db.collection('users').deleteMany({
    //     age: 23
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // console.log('Connected correctly!')


    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID("5ea9c308277662324ca9bdcb")
    // }, {
    //     $inc: {
    //         age: 16
    //     }
    // })

    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID("5ea9c308277662324ca9bdcb")
    // }, {
    //     $inc: {
    //         age: 16
    //     }
    // })

    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Muhamed',
    //     age: 23
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)

    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Veera',
    //         age: 29
    //     }, {

    //         name: 'minna',
    //         age: 49
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'clean the house',
    //         completed: true
    //     }, {
    //         description: 'buy food',
    //         completed: false
    //     }, {
    //         description: 'cultivate garden',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert task')
    //     }
    //     console.log(result.ops)
    // })

    // // db.collection('users').findOne({ _id: new ObjectID("5ea9cdcd6b35a43fd4d40a3a") }, (error, user) => {
    // //     if (error) {
    // //         return console.log('unable to fetch')
    // //     }
    // //     console.log(user)
    // // })

    // db.collection('users').find({age: 23}).toArray((error, users)=>{
    //     console.log(users)
    // })

    // db.collection('users').find({age: 23}).count((error, count)=>{
    //     console.log(count)
    // })

    // db.collection('tasks').findOne({_id: new ObjectID("5ea9d10282d55d3a840cc467")}, (error, task)=>{
    //     console.log(task)
    // })

    // db.collection('tasks').find({completed: false}).toArray((error, tasks)=> {
    //     console.log(tasks)
    // })
