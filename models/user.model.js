const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  firstName: {type:String, required: true, max: 100},
  lastName: {type:String, required: true, max: 100}
});

module.exports = mongoose.model('User', UserSchema);