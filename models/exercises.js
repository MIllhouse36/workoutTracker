const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
 
      type: {
        type: String,
        required: "Enter a type of exercise"
      },
      name: {
        type: String,
        required: "Enter name of exercise"
      },
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number,
      distance: Number

});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;