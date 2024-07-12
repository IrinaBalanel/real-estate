const express = require("express");
const path = require("path"); //needed when setting up static/file paths

const dotenv = require("dotenv");
//load the environment variables from .env
dotenv.config();

const db = require("./modules/properties/db"); //load db.js

//set up the Express app
const app = express();
const port = process.env.PORT || "8888";

//set up application template engine
app.set("views", path.join(__dirname, "views")); //the first "views" is the setting name
//the second value above is the path: __dirname/views
app.set("view engine", "pug");

//set up folder for static files
app.use(express.static(path.join(__dirname, "public")));

//convert query string formats in form data to JSON format (This allows us to use JSON-like methods for parsing data.)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//SET UP PAGE PATHS
app.get("/", (request, response) => {
    response.render("index", { title: "Home" });
});

app.get("/catalog", async (request, response) => {
    let estateList = await db.getEstates();
    if (!estateList.length) {
      await db.initializeEstates(); 
      estateList = await db.getEstates();
    }
    
    response.render("catalog", { title: "Catalog", estates: estateList });
});

app.get("/estate", async (request, response) => {
    let id = request.query.estateId;
    // let id = request.params.id;
    let singleEstate = await db.getSingleEstate(id);
    response.render("estate", { title: "Estate: ", estate: singleEstate });
});


//ADMIN PAGE FOR CREATE
app.get("/admin/estate", async (request, response) => {
    let estateList = await db.getEstates();
    response.render("estate-list", { title: "Administer estates", estates: estateList })
})

app.get("/admin/estate/add", async (request, response) => {
    let estateList = await db.getEstates();
    response.render("estate-add", { title: "Add new estate", estates: estateList });
    console.log("Received Get request");
})

app.post("/admin/estate/add/submit", async (request, response) => {
    console.log("Received POST request");
    console.log("Request Body:", request.body);
    let title = request.body.title; 
    let size = request.body.size; 
    let beds = request.body.bedroom; 
    let baths = request.body.bathroom;
    let descr = request.body.description; 
    let address = request.body.address;
    let price = request.body.price; 
    let image = request.body.image;
  
    let newEstate = {
        title: title,
        size: parseInt(size),
        bedroom: parseInt(beds),
        bathroom: parseInt(baths),
        description: descr,
        address: address,
        price: parseInt(price),
        image: image
    };
    await db.addEstate(newEstate);
    response.redirect("/admin/estate");
})



//set up server listening
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
}); 
  