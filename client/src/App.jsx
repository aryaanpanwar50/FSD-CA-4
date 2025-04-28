
import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import AddExpense from './AddExpense'


function App() {
const [data,setData]= useState([])

useEffect(()=>{
  const fetchData=async()=>{
    const response = await axios.get('http://localhost:5000/api/')
    console.log(response.data)
  
    setData(response.data)
  }
  fetchData()
},[])

const handleDelete=async()=>{
  try{
   await axios.delete(`http://localhost:5000/api/${data._id}`)
  }catch(error){
   console.error(error.message)
  }
}


  return (
    <>
    <h1>Expenses</h1>
      <AddExpense></AddExpense>
      {data.map((item,id)=>(
        <div key={id}>
          <h3>Name : {item.name}</h3>
          <h3>Amount : ${item.amount}</h3>
          <h3>Category : {item.category}</h3>
          <button onClick={handleDelete}></button>
          <br />
        </div>
      ))}

    </>
  )
}

export default App
