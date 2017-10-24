"use strict";
const mongoose = require("./../libs/connection-db");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: { type: String },
  description: { type: String },
  status: {type: Boolean}
});

module.exports = mongoose.model("tasks", taskSchema);
