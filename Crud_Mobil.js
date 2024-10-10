const express = require('express')
const app = express();
const mobiles = [
    {
       "company":"samsung",
       "model":"A15 5G",
       "price":"19999",
        
    },

    {
       "company":"samsung",
       "model":"A35 5G",
       "price":"25999",
        
    },
    {

        "company":"samsung",
        "model":"A55 5G",
        "price":"36999",
    },
];
app.get('/mobile', (req, res) => {
    res.send(mobiles);
})
app.get('/mobile/:index', (req, res) => {
    res.send(mobiles[req.params.index]);
})
app.post('/mobile/:name', (req, res) => {
    res.push(req.params.name);
    res.send(mobiles);
})
app.delete('/mobile/:index', (req, res) => {
    mobiles.splice(req.params.index, 1);
})
app.patch('/mobile/:index', (req, res) => {
    mobiles[req.params.index];
    // req.params.new ;
});
app.listen(2000, () => {
    console.log("server started at 2000");
})
