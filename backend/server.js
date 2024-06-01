const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); 
const { MongoClient } = require('mongodb');
require('dotenv').config()

const app = express();

app.use(cors());
app.use(express.json());


const url = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.5';
const dbName = 'blogr';

const client = new MongoClient(url);

async function connect() {
    try {
        await client.connect();
        console.log('Connected successfully to MongoDB');

        const db = client.db(dbName);
        // Perform actions on the collection object
        const users = db.collection('users')
        const blogs = db.collection('blogs')

        app.set('users', users)
        app.set('blogs', blogs)
        // client.close(); // Uncomment this if you are done with your connection
    } catch (err) {
        console.error(err);
    }
}


connect();

const userApp = require('./api/userroute')
const blogApp = require('./api/blogroute')
const auth = require('./api/auth')
app.use('/users', userApp)
app.use('/blogs', blogApp)
app.use('/', auth)

app.listen(5000, ()=> console.log("server running on port 5000"));