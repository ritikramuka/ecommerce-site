import express from "express";
const router = express.Router();
import Product from "../models/productModel.js";
import asynHandler from "express-async-handler";

router.get(
    "/",
    asynHandler(async (req, res) => {
        const products = await Product.find({});

        res.json(products);
    })
);

router.get(
    "/:id",
    asynHandler(async (req, res) => {
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
    })
);

export default router;