var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// Database is now getting ready for setup. Will continue in coming days :)

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