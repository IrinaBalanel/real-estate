const mongoose = require("mongoose");
const dbUrl= `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}/?retryWrites=true&w=majority&appName=real-estate`;

//set up Schema and model
const EstatesSchema = new mongoose.Schema({
    title: String,
    size: Number,
    bedroom: Number,
    bathroom: Number,
    description: String,
    address: String,
    price: Number,
    image: [String]

    // title: String
});

//create class using schema
const Estate = mongoose.model("Estate", EstatesSchema);

//MONGODB FUNCTIONS
async function connect() {
    await mongoose.connect(dbUrl); //connect to mongodb
}

//initialize properties collection with data
async function initializeEstates(){
    const estateList = [
        {
            title: "Modern Condo in Downtown Toronto",
            size: 850,
            bedroom: 2,
            bathroom: 1,
            description: "A modern condo located in the heart of Toronto. Perfect for small families or professionals. This stylish residence offers an open-concept layout with sleek finishes and contemporary design elements. The spacious living area flows seamlessly into a gourmet kitchen equipped with stainless steel appliances and quartz countertops. Enjoy the convenience of being steps away from the citys best dining, shopping, and entertainment options.",
            address: "123 Queen St W, Toronto, ON",
            price: 850000,
            image: [
                "https://images.unsplash.com/photo-1586576782138-19304c43d0e1?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ]

        },
        {
            title: "Spacious Family Home in Vancouver",
            size: 2500,
            bedroom: 4,
            bathroom: 3,
            description: "A spacious family home with a large baA spacious family home with a large backyard and modern amenities. Ideal for growing families. This charming residence features an open floor plan, allowing for easy flow between the living, dining, and kitchen areas. The kitchen is outfitted with top-of-the-line appliances, granite countertops, and a large island perfect for meal preparation and gatherings.",
            address: "456 West 12th Ave, Vancouver, BC",
            price: 1800000,
            image:[
                "https://images.unsplash.com/photo-1714368694128-f88a12e08634?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1585128792020-803d29415281?q=80&w=3443&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ]
        },
        {
            title: "Cozy Cottage in Old Quarter of Muskoka",
            size: 1200,
            bedroom: 3,
            bathroom: 2,
            description: "A cozy cottage in the Old Quarter of Muskoka. This charming retreat offers a perfect blend of rustic charm and modern comforts. Nestled among mature trees, the cottage features a welcoming porch and a serene garden. Inside, you’ll find a warm and inviting living area with a stone fireplace, perfect for cozy evenings. The kitchen is equipped with modern appliances and quaint cabinetry, ideal for preparing family meals.",
            address: "789 Lakeview Rd, Muskoka, ON",
            price: 600000,
            image: [
                "https://images.unsplash.com/photo-1595877244574-e90ce41ce089?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1617098900591-3f90928e8c54?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1556020685-ae41abfc9365?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ]
        },
        {
            title: "Luxury Penthouse in Center of Montreal",
            size: 1800,
            bedroom: 3,
            bathroom: 2,
            description: "A luxury penthouse with breathtaking city views and top-of-the-line finishes. This stunning residence features expansive windows that offer panoramic vistas of the skyline, flooding the space with natural light. The interiors boast premium materials and exquisite craftsmanship, including custom cabinetry, high-end appliances, and designer fixtures. Spacious living areas are perfect for entertaining, while the elegant bedrooms provide a serene retreat.",
            address: "101 Rue Sherbrooke, Montreal, QC",
            price: 1200000,
            image: [
                "https://images.unsplash.com/photo-1577872134008-2032c595ecc3?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1556020685-ae41abfc9365?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1511401139252-f158d3209c17?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ]
        },
        {
            title: "Beachfront Villa in Prince Edward Island",
            size: 3000,
            bedroom: 5,
            bathroom: 4,
            description: "A stunning beachfront villa with direct access to the beach, perfect for vacation getaways. This exquisite property features expansive windows that offer breathtaking ocean views, filling the home with natural light. The open-concept living space includes a gourmet kitchen with high-end appliances, a spacious dining area, and a comfortable living room that opens onto a large deck.",
            address: "202 Oceanview Dr, Cavendish, PE",
            price: 1500000,
            image: [
                "https://images.unsplash.com/photo-1590725121839-892b458a74fe?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1596113199003-03babc2bdd2b?q=80&w=3840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1709605626043-1ded4faf1b94?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ]
        },
        {
            title: "Urban Loft in Calgary",
            size: 950,
            bedroom: 1,
            bathroom: 1,
            description: "A trendy urban loft with an open floor plan, exposed brick walls, and modern appliances. This stylish residence features soaring ceilings and large industrial-style windows that flood the space with natural light. The open-concept living area seamlessly integrates a contemporary kitchen equipped with stainless steel appliances, sleek countertops, and a spacious island perfect for casual dining and entertaining.",
            address: "303 10th Ave SW, Calgary, AB",
            price: 500000,
            image: [
                "https://images.unsplash.com/photo-1565953522043-baea26b83b7e?q=80&w=2624&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1639432327656-6a03a0ffbea2?q=80&w=3500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1600376646622-dab45268282b?q=80&w=2920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ]
        },
    ];
    await Estate.insertMany(estateList);
}

//Get all properties from the properties collection
async function getEstates() {
    await connect();
    return await Estate.find({}); //return array for find all
}

async function getSingleEstate(id) {
    await connect();
    return await Estate.findById(id);
}

async function addEstate(newEstate) {
    await connect();
    const estate = new Estate(newEstate);
    await estate.save();
}

module.exports = {
    initializeEstates,
    getEstates,
    getSingleEstate,
    addEstate
}
