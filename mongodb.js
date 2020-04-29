//CRUD create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        console.log('Unable to connect to database!')
    }

    console.log('Connected correctly!')
    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Jack',
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

    db.collection('tasks').insertMany([
        {
            description: 'clean the house',
            completed: true
        }, {
            description: 'buy food',
            completed: false
        }, {
            description: 'cultivate garden',
            completed: false
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert task')
        }
        console.log(result.ops)
    })

})


