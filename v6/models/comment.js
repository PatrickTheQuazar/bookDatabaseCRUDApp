var mongoose = require("mongoose");

// schema for a user creating their own comment 
// associations will be described and written in the near future.
var commentSchema = mongoose.Schema({
    text: String,
    author: String
});

module.exports = mongoose.model("Comment", commentSchema);