const express = require('express');
const Workout = require('../models/workoutModel');
const { createWorkout } = require('../controllers/workoutController');
const router = express.Router()

router.get('/', (req, res) => {
    res.json({ msg: 'Get all workouts' })
})

router.get('/:id', (req, res) => {
    res.json({ msg: 'Get a single workout' })
})

router.post('/', createWorkout)

router.delete('/:id', (req, res) => {
    res.json({ msg: 'delete a new workout' })
})

router.patch('/:id', (req, res) => {
    res.json({ msg: 'Update a new workout' })
})

module.exports = router