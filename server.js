const express = require('express');
const mongoose = require('mongoose');

// Routes
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

mongoose
	// .connect('mongodb://kakis16_argueside:nofe2236kakis16@127.0.0.1:27017/kakis16_argueside', { useNewUrlParser: true })
    .connect('mongodb://127.0.0.1/YourTED', { useNewUrlParser: true })
	.then(()=>console.log('Mongo DB connected'))
	.catch(err =>console.log(err));

app.get('/', (req, res) => res.send('Hello!'));

// Use routes
// use('ścieżka', zmienna z require, ktora jest danym plikiem)
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

// process.env.PORT jest pod heroku
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));