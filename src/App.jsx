import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"


const App = () => {

  const [formData,setFormData] = useState([
  //   {
  //   id:1,
  //   title:"2 kilo",
  //   description:"baigan"
  // },
  // {
  //   id:3,
  //   title:"4 kilo",
  //   description:"Gehu"
  // }
])

  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")

  const addHandle=(e)=>{
    e.preventDefault();
    
    if(title.length!==0){
      const obj = {
        id:Math.random(),
        title,
        description
      }
  
      setFormData([...formData,obj])
      setTitle("")
      setDescription("")
    }
  }
  
  const deleteHandle=(id)=>{
    setFormData(formData.filter(items=>items.id!=id));
  }
  
   
  const editHandle=(id)=>{
    const editItem = formData.filter(item=>item.id==id)
    setTitle(editItem[0].title)
    setDescription(editItem[0].description)
  }

  
  console.log(formData);
  

  return (
    <>
      <div className='text-center mt-5'>
        <h1>React ToDo List CRUD App</h1>
      </div>

      <form >
        <div className="title-description d-flex align-items-center justify-content-center mt-5">
          <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Title' />
          <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='Description' />
          <button className='btn btn-success' onClick={addHandle}>Add</button>
        </div>
      </form>

      {
        formData.length!=0?
        (
        <div className='d-flex flex-column align-items-center'>
          <table className='table table-dark mt-5'>
            <thead className=''>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
                {
                  formData.map((data)=>{
                    return(
                      <tr key={data.id}>
                        <td>{data.title}</td>
                        <td>{data.description}</td>
                        <td>
                          <button className='btn btn-warning mx-2' onClick={()=>editHandle(data.id)} >Edit</button>
                          <button className='btn btn-danger' onClick={()=>deleteHandle(data.id)}>Delete</button>
                        </td>
                      </tr>
                    )
                  })
                }
            </tbody>
          </table>
          <button className='btn btn-danger mt-3'  onClick={()=>{setFormData([]);setTitle("");setDescription("")}} style={{width:"88px",backgroundColor:"red"}}>Clear All</button>
        </div>
        ):
        <h2 className='text-center mt-4'>List is Empty!</h2>
      }
    </>
  )
}

export default App
