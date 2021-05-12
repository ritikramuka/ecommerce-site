import Product from "../models/productModel.js";
import asynHandler from "express-async-handler";

/* 
    @desc Fetch all products
    @route GET/api/products
    @access public
*/
const getProducts = asynHandler(async (req, res) => {
    const products = await Product.find({});

    res.json(products);
});

/* 
    @desc Fetch product by id
    @route GET/api/product/id
    @access public
*/
const getProductById = asynHandler(async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: "product not found" })
        }
    } catch (error) {
        res.json({ message: "product not found" })
    }
});

export {
    getProducts,
    getProductById,
}