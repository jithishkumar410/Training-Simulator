import  { useState } from 'react'
import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'

function Reg() {
  const [username,setname]=useState('')
  const [email,setemail]=useState('')
  const [password,setpass]=useState('')
  const [cpass,setcpass]=useState('')
 
  const history = useNavigate()

  function handlesum(e){
   e.preventDefault()
   if(email==="" || password==="" || username===""){
    Swal.fire({
      icon: "error",
      title: "Invalid Credentials",
      text: "Enter all fields",
   
    });
   }
   else if(password!=cpass){
    Swal.fire({
      icon: "error",
      title: "Invalid Credentials",
      text: "Both passwords are not Equal",
   
    });
   }
   else if(password.length<8){
    Swal.fire({
      icon: "error",
      title: "Invalid Registration",
      text: "Password must atleast 8 characters",
   
    });
   }
   else{
    axios.post('http://127.0.0.1:8000/',{username,email,password})
    .then((res)=>{
      Swal.fire({
        icon: "success",
        title: "Registered Sucessfully",
        showConfirmButton: false,
        timer: 1500
      });
      history('/login')
      console.log(res.data)
      
    })
    .catch((err)=>{
      Swal.fire({
        icon: "error",
        title: "Invalid Credentials",
        text: "Check you username and password",
     
      });
      console.log(err)
    })
   }
  }
  return (
    
    <div className="bg-cover  h-screen flex flex-col justify-center items-center  bg-[url('./assets/Nv2.gif')]">
      
     <div className='fixed left-6 top-5 flex gap-4'>
     <a href='/login' className='bg-lime-500 py-3 px-4 mt-8 text-xl rounded border border-lime-500 hover:text-lime-500 hover:bg-slate-950'>Login</a>
     <a href='/' className='bg-lime-500 py-3 px-4 mt-8 text-xl rounded border border-lime-500 hover:text-lime-500 hover:bg-slate-950'>Home</a>
     </div>
   <div className=' px-10 py-5  w-96 rounded  border border-gray-600 shadow-lg bg-black '>
   <h2 className='text-lime-500 text-[2rem] text-center font-bold mb-6'>Registration Page</h2>
   <div className='flex flex-col gap-1 mb-4 '>
      <label className='text-lime-500 text-xl font-semibold'>Your official Name:-</label>
      <input className=' border-lime-500 p-2 rounded border-2' type="Text" placeholder='Your Name'
      onChange={(e)=>{
        setname(e.target.value)
      }} 
      ></input>
      </div> 
      <div className='flex flex-col gap-1 mb-4 '>
      <label className='text-lime-500 text-xl font-semibold'>Email</label>
      <input className=' border-lime-500 p-2 rounded border-2' type="email" placeholder='Email'
      onChange={(e)=>{
        setemail(e.target.value)
      }} 
      ></input>
      </div> 
      <div className='flex flex-col gap-1 mb-4'>
      <label className='text-lime-500 text-xl font-semibold'>Password</label>
      <input className=' border-lime-500 p-2 rounded border-2' type="password" placeholder='Password'
      onChange={(e)=>{
        setpass(e.target.value)
      }} 
      ></input>
      </div> 
      <div className='flex flex-col gap-1'>
      <label className='text-lime-500 text-xl font-semibold'>Confirm Password</label>
      <input className=' border-lime-500 p-2 rounded border-2' type="password" placeholder='Confirm Password'
      onChange={(e)=>{
        setcpass(e.target.value)
      }} 
      ></input>
      </div>    
      <div className='flex justify-center'>
        
      <Button onClick={handlesum} className='bg-lime-500 p-2 px-4 mt-8 rounded border border-lime-500 hover:text-lime-500 hover:bg-slate-950'>Register</Button>
      </div>
    </div>
    </div>
  )
}

export default Reg
