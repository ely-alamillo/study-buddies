const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
  groupName: { type: String, required: true},
  time: { type: Number, required: true},
  subject: { type: String, required: true},
  instructor: { type: String},
  createdBy: {type: String },
});

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true},
  password: { type: String, requred: true},
  studyGroups: [GroupSchema],
});

const Group = mongoose.model('Group', GroupSchema);
const User = mongoose.model('User', UserSchema);

module.exports = {
  Group,
  User,
};
