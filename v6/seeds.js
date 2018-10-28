var mongoose = require("mongoose");
var Book     = require("./models/book");
var Comment  = require("./models/comment");

// New data structure that adds placeholder books when user is directed to
// index page
var data = [
    {
        name: "Fundamentals of Calculus", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Calculus textbook, nice and refurbished with a few markings inside. Overall, it's pretty good.",
        bookAuthor: "Me"
    }, 
    {
        name: "Chemistry: Principles and Reactions",
        image: "https://farm4.staticflickr.com/3859/15123592300_6eecab209b.jpg",
        description: "General level Chemistry textbook, in perfect condition with no markings or damages, only change is that it was taken out of the box.",
        bookAuthor: "Masterton and Hurley"
    }, 
    {
        name: "The Great Dialogues of Plato",
        image : "https://images-na.ssl-images-amazon.com/images/I/51p25QVO0VL._SX310_BO1,204,203,200_.jpg",
        description: "Classical guide for surviving Philosophy, a must-have. No damages, and only a few highlights.",
        bookAuthor: "W.H.D Rousse"
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