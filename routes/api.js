const router = require("express").Router();
const { db } = require("../models/exercises");
const Exercise = require("../models/exercises");
const Workout = require("../models/workout");

router.get("/api/workouts", (req, res) => {
  Workout.find()
    .populate("exercises")
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .populate("exercises")
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  Exercise.create(body)
    .then(({_id}) =>  Workout.findOneAndUpdate({_id: params.id},
      {$push: {exercises: _id}}, {new: true}))
      .then(dbWorkouts => {
        res.json(dbWorkouts)
      })     
      .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts/", ({ body }, res) => {
  Workout.create({})
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});



module.exports = router;
