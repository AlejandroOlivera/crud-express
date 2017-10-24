const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/crud-mongo', {useMongoClient:true})

module.exports = mongoose

