const express = require('express');
const app = express();

const mongodb = require('mongodb');

let collection;

mongodb.MongoClient.connect('mongodb://localhost:27017', {})
.then(client => {
    console.log('Connected to Database');
    const db = client.db('BCA');
    collection = db.collection('jokes');
})
.catch(error => console.error(error));

app.use(express.json());

app.get('/jokes', async(req, res) => {
    let jokes = await collection.find().toArray();
    if (jokes.length === 0) {
        return res.status(404).send('No jokes found');
    }
    res.json({jokes: jokes});
}
);

app.get('/jokes/:id', async(req, res) => {
    let id = new mongodb.ObjectId(req.params.id);
    let joke = await collection.find({_id: id}).toArray();
    res.json({joke: joke});
});


app.post('/jokes', async (req, res) => {
    let newJoke = { joke: req.body.joke };
    //jokes.push(newJoke);
    //nextId = nextId + 1;
    const joke = collection.insertOne(newJoke);
    res.status(201).json({message: "Joke created", joke: joke});
});


app.listen(3000, () => {    
    console.log('Server is running on port 3000');
}
);