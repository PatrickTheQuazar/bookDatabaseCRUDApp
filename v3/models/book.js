var mongoose = require("mongoose");

// schema for a user creating their own book.
var bookSchema = new mongoose.Schema({
   name: String,
   bookAuthor: String,
   image: {
       picture: String
    //   source: String
    //   source will be used when finding the locations of books
    // save this here for now
   },
   description: String,
   comments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Comment"
            }
       ]
});

module.exports = mongoose.model("Book", bookSchema);