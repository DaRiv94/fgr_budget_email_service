// const express = require('express');
// const moment = require('moment');
// const router = express.Router();
// const Budget = require('../models/Budget')
// const Category = require('../models/Category')
// const auth_M = require('../middleware/auth');
// const { Op } = require("sequelize");
// const { INTEGER } = require('sequelize');

// // GET budgets /budget
// router.get("/", auth_M, async (req, res) => {
//     try {
//         // let budgets = await Budget.findAll();
//         let budgets = []
//         // let budgets = [{id:1,name:"Dummy Budget",budget_max:1000,budget_real:555,category_id:3},{id:2,name:"test Budget",budget_max:1100,budget_real:885,category_id:1}]
//         let categories = [{id:1,color:"blue",name:"blue cat"},{id:3,color:"purple",name:"purple cat"}]
//         res.send({ budgets: budgets, categories:categories, user: req.user });
//     } catch (e) {

//         res.status(500).send({ "Error": String(e) });
//     }
// });

// // POST budgets /budget  Create a budget
// router.post("/", auth_M, async (req, res) => {
//     try {
//         if(!req.body || !req.body.name || !req.body.budget_max || !req.body.budget_real || !req.body.category_id){
//             res.status(400).json({detail:"Please send valid budget body"})
//         }

//         const budget = await Budget.findOne({
//             where: {
//                 name: req.body.name
//             }
//         })
//         if (budget){
//             return res.status(400).send("That budget name is already in use");
//         }
//         const category = await Category.findByPk(req.body.category_id);
//         if (category === null) {
//             res.status(400).json({detail:`Non-existant category_id: ${req.body.category_id}`})
//         }


//         budget = await Budget.create({ name: req.body.name, budget_max: req.body.budget_max, budget_real: req.body.budget_real, category_id: req.body.category_id});

//         return res.json({budget})
//     } catch (e) {

//         res.status(500).send({ "Error": String(e) });
//     }
// });

// // GET budgets /budget/:id  get a budget
// router.get("/:id", auth_M, async (req, res) => {
//     try {
//         if(typeof req.params.id != INTEGER){
//             res.status(400).json({detail:"query param must be integter"})
//         }
//         const budget = await Budget.findByPk(req.params.id);
//         if (budget === null) {
//             res.status(404).json({detail:`No budget with id ${req.params.id} was found`})
//         }

//         return res.json({budget})
//     } catch (e) {

//         res.status(500).send({ "Error": String(e) });
//     }
// });

// // PUT budgets /budget/:id  edit a budget
// router.put("/:id", auth_M, async (req, res) => {
//     try {

//         if(!req.body || !req.body.name || !req.body.budget_max || !req.body.budget_real || !req.body.category_id){
//             res.status(400).json({detail:"Please send valid budget body"})
//         }
//         if(typeof req.params.id != INTEGER){
//             res.status(400).json({detail:"query param must be integter"})
//         }
//         const budget = await Budget.findByPk(req.params.id);
//         if (budget === null) {
//             res.status(404).json({detail:`No budget with id ${req.params.id} was found`})
//         }
//         const category = await Category.findByPk(req.body.category_id);
//         if (category === null) {
//             res.status(400).json({detail:`Non-existant category_id: ${req.body.category_id}`})
//         }
//         //see https://sequelize.org/master/manual/model-querying-basics.html
//         // Find a budget with the same name you are trying to change to that is not the budget you are using
//         const otherbudget = await Budget.findOne({
//             where: {
//                 [Op.and]:[
//                     {id: {[Op.ne]: req.params.id}},
//                     {name: req.body.name}
//                 ]
                
//             }
//         })
//         if (otherbudget){
//             return res.status(400).send("That budget name is already in use");
//         }

//         budget.name = req.body.name
//         budget.budget_real = req.body.budget_real
//         budget.budget_max = req.body.budget_max
//         budget.category_id = req.body.category_id
//         await budget.save()

//         return res.json({budget})
//     } catch (e) {

//         res.status(500).send({ "Error": String(e) });
//     }
// });

// // DELETE budgets /budget/:id  delete a budget
// router.delete("/:id", auth_M, async (req, res) => {
//     try {
//         if(typeof req.params.id != INTEGER){
//             res.status(400).json({detail:"query param must be integter"})
//         }
//         const budget = await Budget.findByPk(req.params.id);
//         if (budget === null) {
//             res.status(404).json({detail:`No budget with id ${req.params.id} was found`})
//         }

//         budget = await budget.destroy();

//         return res.json({budget})
//     } catch (e) {

//         res.status(500).send({ "Error": String(e) });
//     }
// });




// module.exports = router;