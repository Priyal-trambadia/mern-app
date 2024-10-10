const express = require('express');
const mongoose = require('mongoose');




const app = express()

app.use(express.json());


mongoose.connect("mongodb+srv://priyaltrambadia:Priyal%40123@mongodb410.iy0lh.mongodb.net/", {
       dbName: "MERN_STACK"
}
).then(() => console.log("MongoDB Connected Successfully...!")).catch((err) => console.log(err));
const port = 1000;
app.listen(port, () => console.log('server is running on port ${1000}'))

