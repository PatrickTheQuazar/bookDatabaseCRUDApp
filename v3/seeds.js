var mongoose = require("mongoose");
var Book     = require("./models/book");
var Comment  = require("./models/comment");

// New data structure that adds placeholder books when user is directed to
// index page
var data = [
    {
        name: "Fundamentals of Calculus", 
        image: {
            picture: "/",
            source: "Patrick Apgar"
        },
        description: "/",
    }, 
    {
        name: "Chemistry: Principles and Reactions",
        image: {
            picture: "/",
            source: "Quazar"
        },
        description: "/"
    }, 
    {
        name: "The Great Dialogues of Plato",
        image :{
            picture: "/",
            source: "Quazar"
        },
        description: "/"
    }        
];

//seedDB function, aka "callback hell",  that loops through each object 
// through the data array
function seedDB(){
    Book.remove({}, function(err){
       if(err){
           console.log(err);
       }
       console.log("removed book!");
       Comment.remove({}, function(err){
           if(err){
                console.log(err);
            }
            console.log("removed comment!");
            //   add a few books
            data.forEach(function(seed){
                Book.create(seed, function(err, book){
                    if(err){
                        console.log(err);
                    } else {
                        console.log("added a book");
                        Comment.create(
                            {
                                text: "This book is great, but it's a little rough around the edges",
                                author: "Patrick"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    book.comments.push(comment);
                                    book.save();
                                    console.log("Created new comment");
                                }
                            });
                    }
                })
            });
       });
    });
}

module.exports = seedDB;