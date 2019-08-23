const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {

    const db = client.db('FirstMongo');

    if(err){
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB Server!!');
    
    db.collection('FirstMongo').insertOne({
        taskName: 'Do something else',
        completed: false
    }, (err, result) => {
        if(err){
            console.log('There was something wrong when inserting data!');
        }
    })
    db.collection('FirstMongo').insertOne({
        taskName: 'Get it done',
        completed: false
    }, (err, result) => {
        if(err){
            console.log('There was something wrong when inserting data!');
        }
    })

    client.close();

})