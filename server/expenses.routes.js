const express = require('express')
const route  = express.Router()
const {getExpense,addExpense,updateExpense,deleteExpense} = require('./expenses.controller')

route.get('/',getExpense)
route.post('/',addExpense)
route.delete('/:id',deleteExpense)
route.put('/:id',updateExpense)

module.exports = route