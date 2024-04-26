import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
function Tb() {
  const [uname, setname] = useState('');
  const [ui, setid] = useState();
  const history = useNavigate();

  function logout() {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('http://127.0.0.1:8000/logout/', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Logout Sucessfully",
          showConfirmButton: false,
          timer: 1500
        });
        localStorage.removeItem('token');
        history('/');
      })
      .catch(error => {
        console.error('Logout:', error);
      });
    } else {
      console.error('Token not available');
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      history('/');
    } else {
      axios.get('http://127.0.0.1:8000/home/', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        setname(response.data.username);
        setid(response.data.userid);
      })
      .catch(error => {
        console.error('Home:', error);
        if (error.response && error.response.status === 401) {
          history('/');
        }
      });
    }
  }, []); 

  

  return (
    <div>
      <div className="flex gap-4">
       
        <Button onClick={logout} className='bg-lime-500 py-3 px-4 text-xl rounded border border-lime-500 hover:text-lime-500 hover:bg-slate-950'>Logout</Button>
        <a href={`/Profile/${uname}`} className='bg-lime-500 py-1 px-4 text-xl border border-lime-500 hover:text-lime-500 hover:bg-slate-950 rounded'>Hi.. {uname}!</a>
      </div>
    </div>
  );
}

export default Tb;
