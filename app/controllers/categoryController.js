const express = require('express')
const router = express.Router()


const { Category } = require('../models/category')

router.get('/', function(req, res){
    Category.find()
    .then(function(category){
        res.send(category)
    })
    .catch(function(err){
        res.send(err)
    })
})

router.post('/', function(req, res) {
    const body = req.body
    const category = new Category(body)
    category.save()
    .then(function(category){
        res.send(category)
    })
    .catch(function(err){
        res.send(err)
    })
})

module.exports = {
    categoryController : router
}