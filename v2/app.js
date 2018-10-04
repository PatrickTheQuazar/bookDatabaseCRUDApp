var express = require('express');
var app = express();
app.set("view engine", "ejs");
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

// initial data structure to show collection of books
//created a forEach loop on books.ejs to loop through each index of
// books and display what the code inside
var books = [
    {name: "Some history textbook", image: "https://pixabay.com/get/e83cb70f2ef7043ed1584d05fb1d4e97e07ee3d21cac104496f8c070aeebb2b9_340.jpg"},
    {name: "The Chap Book", image: "https://farm8.staticflickr.com/7358/10559686465_f6efcd0822.jpg"},
    {name: "A book with glasses", image: "https://pixabay.com/get/e835b40d28f5013ed1584d05fb1d4e97e07ee3d21cac104496f8c070aeebb2b9_340.jpg"},
    {name: "A door surrounded by books", image: "https://pixabay.com/get/e833b40a2ffc023ed1584d05fb1d4e97e07ee3d21cac104496f8c070aeebb2b9_340.jpg"}
    ];

// Initial route setup including root and index route
app.get("/", function(req, res){
    res.render("landing");
});

app.get("/index", function(req, res){
   res.render("books", {books: books}); 
});

app.get("/index/new", function(req, res){
   res.render("new"); 
});

app.post("/index", function(req, res){
//   Define our book names and images
   var name = req.body.name;
   var image = req.body.image;
//   pass in newBook object 
   var newBook = {name:name, image:image};
//   push each new book into the array to be portrayed onto the screen
   books.push(newBook);
//   redirect back to index page
});

app.get("*", function(req, res){
    res.send("Uh oh! Page not found!");
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("server has started!"); 
});