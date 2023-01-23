const items = require("../models/item")




exports.startAllRoutes = (app)=>
{

    app.post("/create_items", async (req, res) => 
    {
        let returnedVal = await items.create({
            name: req.body.nameString,
            price: req.body.priceNum,
            inventory: req.body.invNum,
            nextDelivery: req.body.dateVal,
            deliveryAmt: req.body.deliveryNum
        })
        console.log(returnedVal)
        res.send(returnedVal)
    })

    app.get('/items', async (req, res)=>
    {
        let response = await items.find({});
        res.json(response)
    })



}