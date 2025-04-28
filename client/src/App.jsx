
import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import AddExpense from './AddExpense'
import DeleteButton from './DeleteButton'

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

  return (
    <>
    <h1>Expenses</h1>
      <AddExpense></AddExpense>
      {data.map((item,id)=>(
        <div key={id}>
          <h3>Name : {item.name}</h3>
          <h3>Amount : ${item.amount}</h3>
          <h3>Category : {item.category}</h3>
          <DeleteButton index={item._id} ></DeleteButton>
          <br />
        </div>
      ))}

    </>
  )
}

export default App
