const Expense = require('./expenses.model')

const addExpense = async(req,res)=>{
    const{name,amount,category}= req.body
    try{
        const newExpense = new Expense({
            name,
            amount,
            category
        })
        await newExpense.save()
        res.status(200).json(newExpense)
    }catch(error){
        res.status(500).json(error.message)
    }
}

const getExpense = async(req,res)=>{
    try{
        const data = await Expense.find()
        res.status(201).json(data)
    }catch(error){
        res.status(500).json(error.message)
    }
    
}

const updateExpense = async(req,res)=>{
    try{
        const{name,amount,category} = req.body

        const data = await Expense.findByIdAndUpdate(req.params.id,
            {name:name,amount:amount,category:category},
            {new:true}
        )
        res.status(200).json({messgae:"Updated",data})

    }catch(error){
        res.status(500).json(error.message)
    }
}

const deleteExpense = async(req,res)=>{
    try{
        const deleteData = await Expense.findByIdAndDelete(req.params.id)
        res.status(200).send("The expense is deleted")
    }catch(error){
        res.status(500).json(error.message)
    }
}

module.exports = {addExpense,updateExpense,deleteExpense,getExpense,}