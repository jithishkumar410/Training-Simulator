import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import axios from 'axios';
import Swal from 'sweetalert2'
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    if (email === "" || password === "") {
      
      Swal.fire({
        icon: "error",
        title: "Invalid Feilds",
        text: "Enter Details in all Fields",
     
      });

    } else {
      const loginData = {
        username: email,
        password: password
      };

      axios.post('http://localhost:8000/login/', loginData)
        .then(response => {
          Swal.fire({
            icon: "success",
            title: "Login Sucessfully",
            showConfirmButton: false,
            timer: 1500
          });
          const token = response.data.access; 
          localStorage.setItem('token', token); 
          history('/home');
          console.log(response.data);
        })
        .catch(error => {
          Swal.fire({
            icon: "error",
            title: "Invalid Credentials",
            text: "Check you username and password",
         
          });
          console.error('Login failed:', error);
        });
    }
  }

  return (
    <div className="bg-cover h-screen flex flex-col justify-center items-center bg-[url('./assets/Nv2.gif')]">
      <div className='fixed left-6 top-5 flex gap-4'>
        <a href='/register' className='bg-lime-500 py-3 px-4 mt-8 text-xl rounded border border-lime-500 hover:text-lime-500 hover:bg-slate-950'>Register</a>
        <a href='/' className='bg-lime-500 py-3 px-4 mt-8 text-xl rounded border border-lime-500 hover:text-lime-500 hover:bg-slate-950'>Home</a>
      </div>
      <div className='px-10 py-5 w-96 rounded border border-gray-600 shadow-lg bg-black'>
        <h2 className='text-lime-500 text-[2rem] text-center font-bold mb-4'>Login Page</h2>
        <div className='flex flex-col gap-2 mb-4 '>
          <label className='text-lime-500 text-xl font-semibold'>Username</label>
          <input className='border-lime-500 p-2 rounded border-2' type="text" placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='text-lime-500 text-xl font-semibold'>Password</label>
          <input className='border-lime-500 p-2 rounded border-2' type="password" placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='flex justify-center'>
          <Button onClick={handleLogin} className='bg-lime-500 p-2 px-4 mt-8 rounded border border-lime-500 hover:text-lime-500 hover:bg-slate-950'>Login</Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
