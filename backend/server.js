const express = require('express');
require('dotenv').config()
const workoutRouter = require('./routes/workouts');
const mongoose = require('mongoose');

// express app
const app = express();

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})
app.use('/api/workouts', workoutRouter);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {

        app.listen(process.env.PORT, () => {
            console.log("Connect to db and running on Post ", process.env.PORT);
        })
    }).catch((err) => {
        console.log(err)
    })
