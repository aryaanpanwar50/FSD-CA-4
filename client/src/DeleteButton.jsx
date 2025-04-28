import axios from 'axios'
import React from 'react'

function DeleteButton(id) {
    const handleDelete=async()=>{
       try{
        await axios.delete(`http://localhost:5000/api/${id}`)
        console.log(id)
       }catch(error){
        console.error(error.message)
       }
    }
  return (
    <div>
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default DeleteButton