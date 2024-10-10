import express from 'express';
import { addProduct } from '../Controllers/product.js';


const router =express.Router();

//add product
// router.post('/add',addProduct)

// API Route
    // get all()
    app.get('/products', async (req, res) => {
        const data = await product.find()
        res.send(data);
    })
    // get by id 
    app.get('/Products:id', async (req, res) => {
        const data = await product.findById()
        Id = req.params.id
        res.send(data);
    });

    

    // create
    app.post('/Products', async (req, res) => {
        stu = new product({ ...req.body });
        const data = await product.save();
        res.send(data);
        // const {data}=req.body
    });
    // delete
    app.get('/Products/:id', async (req, res) => {
        const data = await product.delete();
        Id = req.params.id
        res.send(data);
    });

    // update
    app.patch('/Products/:id', async (req, res) => {
        const data = await product.findone()
        Id.req.params.id;
        product.name = req.body.name;
        product.rollno = req.body.rollno;
        const ans = await product.save();
        res.send(data);
    })

    


export default router;