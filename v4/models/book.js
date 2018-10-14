var mongoose = require("mongoose");

// schema for a user creating their own book.
var bookSchema = mongoose.Schema({
   name: String,
   bookAuthor: String,
   image: String,
   description: String,
   comments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Comment"
            }
       ]
});

module.exports = mongoose.model("Book", bookSchema);