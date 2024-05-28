const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express()
//console.log('Hello there');

//middlewire
app.use(express.json());

//routes

app.use("/api/products", productRoute);

app.get('/', (req, res) => {
    res.send('Hello from NODE API changed updated');
})

//get all products
/*
app.get('/api/products', async (req, res)=>{

    try{
        const products = await Product.find({});
        res.status(200).json(products);

    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})*/

//get an individual product
/*
app.get('/api/products/:id', async(req, res)=>{
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
})*/

//add a new product 
/*
app.post('/api/products', async (req, res)=>{
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);

    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})
*/
//update a product by id
/*
app.put('/api/products/:id', async(req, res)=>{
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        
        if(!product){
            return res.status(404).json({message: "Product not found"});
        }

        const UpdatedProduct = await Product.findById(id);
        res.status(200).json(UpdatedProduct);
       
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
})
*/
//delete a product by id
/*
app.delete('/api/products/:id', async(req, res)=>{
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        
        if(!product){
            return res.status(404).json({message: "Product not found"});
        }

        
        res.status(200).json({message: "Product deleted successfully"});
       
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
})
*/
mongoose
    .connect("mongodb+srv://rifatme3489:7wbayDeHjtHcgXz2@backenddb.5y6vkxy.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log('Database connected');
        app.listen(3000, () => {
            console.log('app is running on port 3000');
        });
    })
    .catch(() => {
        console.log('Connection Failed');
    })