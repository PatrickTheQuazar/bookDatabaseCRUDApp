var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    mongoose    = require("mongoose"),
    Book        = require("./models/book"),
    seedDB    = require("./seeds");

// We'll need to connect this application to mongo database using the
// "mongoose.connect" method
mongoose.connect("mongodb://localhost/book_database");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
seedDB();
// Database is now getting ready for setup. Will continue in coming days :)

// Initial route setup including root and index route
app.get("/", function(req, res){
    res.render("landing");
});

app.get("/index", function(req, res){
    Book.find({}, function(err, allBooks){
        if(err){
            console.log(err);
        }else{
            res.render("books", {books: allBooks});     
        }
    });
});

// CREATE - add  new book to DB
app.post("/index", function(req, res){
//   Define our book names and images
   var name = req.body.name;
   var image = req.body.image;
   var desc = req.body.description;
   var author = req.body.image.author; 
   
//   pass in newBook object 
   var newBook = {name:name, image:image};
//   push each new book into the array to be portrayed onto the screen
    Book.create(newBook, function(err, newlyCreated){
        if(err){
            console.log(err);
        }else{
            //redirect back to index page
            res.redirect("/index");
        }
    });
});

// NEW - Show form to create new book
app.get("/index/new", function(req, res){
   res.render("new"); 
});

// SHOW - shows infor about a certain book
app.get("/index/:id", function(req, res){
   Book.findById(req.params.id).populate("comments").exec(function(err, foundBook){
       if(err){
           console.log(err);
       }else{
           console.log(foundBook);
        //   render show template with that book
        res.render("show", {book: foundBook});
       }
   });
});

app.get("*", function(req, res){
    res.send("Uh oh! Page not found!");
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("server has started!"); 
});