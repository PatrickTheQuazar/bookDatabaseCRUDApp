var mongoose = require("mongoose");

var bookSchema = new mongoose.Schema({
   name: String,
   bookAuthor: String,
   image: {
       picture: String,
       source: String
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