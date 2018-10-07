var mongoose = require("mongoose");
var Book     = require(".models/book");
var Comment  = require(".models/comment");

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
    
}