// const express = require('express');
// const router = express.Router();
// const Category = require('../models/Category');
// const {Transaction} = require('../models/Transaction');
// const auth_M = require('../middleware/auth');
// // const Joi = require('@hapi/joi');

// //Get all Catgeories
// router.get("/", auth_M, async (req, res) => {
//     try {
//         let allCategories = await Category.find();

//         res.send({ categories: allCategories });
//     } catch (e) {
//         res.status(500).send({ "Error": e });
//     }

// });

// //Get category-detail
// router.get("/:id", auth_M, async (req, res) => {
//     try {
//         const category = await Category.findById(req.params.id);
//         if (!category) return res.status(404).send(`could not find category with id: ${req.params.id}`);

//         //if found send back to client
//         res.send(category);
//     } catch (e) {
//         res.status(500).send({ "Error": e });
//     }

// });

// //Create a category
// router.post("/", auth_M, async (req, res) => {
//     try {
//         console.log("req.body: ",req.body)
//         const { error } = ValidateNewCategory(req.body);
//         if (error) return res.status(400).send(error.details[0].message);


//         let category = await Category.findOne({title:req.body.title});
//         if (category) return res.status(400).send("A category already exists with that title");

//         let newCategory = new Category({
//             title:req.body.title,
//             color:req.body.color,
//             transactions:[]
//         })

//         await newCategory.save();
//         res.send({ category: newCategory });
//     } catch (e) {
//         res.status(500).send({ "Error": e });
//     }

// });

// //patch a category
// router.patch("/:id", auth_M, async (req, res) => {
//     try {

//         const category = await Category.findById(req.params.id);
//         if (!category) return res.status(400).send(`could not find category with id: ${req.params.id}`);

//         if (req.body.title) {

//             let category = await Category.findOne({title:req.body.title});
//             if (category) return res.status(400).send("A category already exists with that title");

//             category.title = req.body.title;
//         }

//         if (req.body.color) {
//             category.color = req.body.color;
//         }

//         if (req.body.transaction_id) {
//             const transaction = await Transaction.findById(req.body.transaction_id);
//             if (!transaction) return res.status(400).send(`could not find transaction with id: ${req.body.transaction_id}`);
//             category.transactions.push(transaction);
//         }

//         const { error } = ValidateNewCategory({color:category.color, title:category.title});
//         if (error) return res.status(400).send(error.details[0].message);

//         await category.save();

//         res.send(category);
//     } catch (e) {
//         res.status(500).send({ "Error": e });
//     }

// });

// function ValidateNewCategory(newCategory){
//     // const schema =Joi.object({
//     //     title: Joi.string().min(2).max(50).required(),
//     //     color: Joi.string().min(2).max(50).required()
//     // })
//     // return schema.validate(newCategory); 
//     return true
// }

// module.exports = router;