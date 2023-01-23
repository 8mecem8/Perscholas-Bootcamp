
const fruits = require("../DbModel/fruit");
const veggies = require("../DbModel/veggie");





//console.log(JSON.stringify(req.body,null,2))



exports.startAllRoutes = (app)=>
{

  app.get("/veggies", async (req, res) => {const result = await veggies.find();res.json(result);});

  app.get("/fruits", async (req, res) => {const result = await fruits.find();res.json(result);});




  app.get("/veggie/:name", async (req, res) => {const result = await veggies.findOne({name:req.params.name});res.json(result);}); 

  app.get("/fruit/:name", async (req, res) => {const result = await fruits.findOne({name:req.params.name});res.json(result);}); 




  app.post("/create_fruit", async (req, res) => 
  {
    const {name,color,age,readyToEat,} = req.body;let SV = await fruits.create({name,color,age,readyToEat,}); if (SV) {res.send(SV)}
  });

  app.post("/create_veggie", async (req, res) => 
  {
    const {name,color,age,readyToEat,} = req.body;let SV = await veggies.create({name,color,age,readyToEat,}); if (SV) {res.send(SV)}
  });

  
  
  
  
  
  app.delete("/delete_nameless_data", async (req, res) => 
  {
    let fruitResponse = await fruits.deleteMany({ name: "" });
    let veggieResponse = await veggies.deleteMany({ name: "" });
  
  
    res.send({ data: `deleted ${fruitResponse.deletedCount} fruits and ${veggieResponse.deletedCount} veggies.` });
  });
}