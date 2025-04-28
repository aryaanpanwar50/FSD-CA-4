import axios from 'axios'
import React, { useState } from 'react'

function AddExpense() {
    const [name,setName] = useState('')
    const[amount,setAmount] = useState('')
    const [category,setCategory] = useState('')

    const postData =async()=>{
        try{
            await axios.post('http://localhost:5000/api/',{name,amount,category})
            alert("Expense added")
        }catch(error){
            console.error(error.message)
        }
    }
  return (
    <form onSubmit={postData}>
        <input type="text" onChange={(e)=>setName(e.target.value)}/>
        <input type="number" onChange={(e)=>setAmount(e.target.value)}/>
        <input type="text" onChange={(e)=>setCategory(e.target.value)}/>
        <button type='submit' >Add</button>
    </form>
  )
}

export default AddExpense