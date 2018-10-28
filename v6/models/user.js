var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: {type: String, default: ""},
    password: {type: String, default: ""}
});

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model("User",  UserSchema);