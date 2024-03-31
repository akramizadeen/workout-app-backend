const express = require('express')
const { 
    getWorkouts,
    getWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
} = require('../controllers/workoutController')

const router = express.Router()

// GET all workouts
router.get('/', getWorkouts)

// GET a workouts
router.get('/:id', getWorkout)

// POST a workout
router.post('/', createWorkout)

// UPDATE (PATCH) a workout
router.patch('/:id', updateWorkout)

// DELETE a workout
router.delete('/:id', deleteWorkout)

module.exports = router
