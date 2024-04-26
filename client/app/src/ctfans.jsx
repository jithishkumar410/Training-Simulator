import axios from 'axios';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import ReactConfetti from 'react-confetti';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from './components/ui/button';

  function Ctfans() {
    let { cif } = useParams();
    const [data, setData] = useState(null);   
    const [ans,setans]=useState('') 
    const [w,setw]=useState({width:window.innerWidth,height:window.innerHeight})
    const [st,setst]=useState(false)
    const [ui,setui]=useState()

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
                setui(response.data.userid)
            })
            .catch(error => {
                console.error('Home:', error);
                if (error.response && error.response.status === 401) {
                    history('/');
                }
            });
        }
    }, []); 

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/cta${cif}/`)
        .then((res) => {
            setData(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [cif]);

    if (!data) {
        return null; 
    }
    
           
  function addc(){
    axios.post('http://127.0.0.1:8000/addc/',{ui,'ci':cif})
    .then((res)=>{
      console.log(res.data)
    })
    .catch((err) => {
      console.log('cat:', err);
  });
}
    


    function check(){
        if(ans===data.ans){
            addc()
            Swal.fire({
                icon: "success",
                title: "Correct Answer!",
                showConfirmButton: false,
                timer: 1500
              });
            setst(true)
         setInterval(()=>{
            setst(false)
         },20000)

      
           
        }
        else{
            alert("wrong")
        }
    }

    return (
        <div className='flex justify-center items-center h-screen bg-black'>
             {st?(<ReactConfetti width={w.width} height={w.height} gravity={0.3} />):(null)}
             <div className='flex gap-4 fixed right-60 top-4'>
             <a href="https://copy.sh/v86/?profile=linux26&ref=itsfoss.com" target="blank"><Button className='bg-lime-500 py-3 px-4  text-xl rounded border border-lime-500 hover:text-lime-500 hover:bg-slate-950 '>Open Terminal</Button></a>
             <a href={`/home/ctf`} className=' bg-lime-500 py-1 px-4 text-xl border border-lime-500 hover:text-lime-500 hover:bg-slate-950 rounded'>Back</a>
             </div>
            <Card className='border-2 border-slate-400 w-[40rem] bg-white'>
                <CardHeader>
                    <CardTitle>{data.cq}</CardTitle>
                    <CardDescription className='mt-3 text-lg'>Description: {data.cdes}</CardDescription>
                </CardHeader>
                <CardContent className='flex justify-between'>
                    {data.cfile ? (
                        <a className='bg-lime-500 p-1 px-3 rounded text-lg' href={`http://127.0.0.1:8000${data.cfile}`} download>
                            HintFile
                        </a>
                    ) : (
                        <a className='bg-lime-500 p-1 px-3 rounded text-lg' href='#'>
                            No File
                        </a>
                    )}
                    <div className='flex gap-6'>
                        <div>
                            <Popover>
                                <PopoverTrigger className='text-lime-500 bg-black border-2 border-lime-500 p-1 px-3 rounded text-lg'>Hint 1</PopoverTrigger>
                                <PopoverContent className='bg-white border-lime-500 border-2 p-5'>{data.ch1}</PopoverContent>
                            </Popover>
                        </div>
                        {data.ch2.length > 1 ? (
                            <div>
                                <Popover>
                                    <PopoverTrigger className='text-lime-500 bg-black border-2 border-lime-500 p-1 px-3 rounded text-lg'>Hint 2</PopoverTrigger>
                                    <PopoverContent className='bg-white border-lime-500 border-2 p-5'>{data.ch2}</PopoverContent>
                                </Popover>
                            </div>
                        ) : null}
                    </div>
                </CardContent>
                <CardContent className='flex justify-between text-xl'>
                    <CardDescription className='text-xl'>Author: {data.caut}</CardDescription>
                    <CardDescription className='text-xl'>Points: {data.cp}</CardDescription>
                </CardContent>
                <CardFooter className='flex flex-col mt-5'>
                    <input className='p-2 border-2 mb-3 rounded w-[80%] border-lime-500' placeholder='CTF(flag)' onChange={(e)=>{
                        setans(e.target.value)
                    }}></input>
                    <Button className='bg-lime-500 py-3 px-4 text-xl rounded border border-lime-500 hover:text-lime-500 hover:bg-slate-950' onClick={()=>{
                        check()
                    }}>Submit</Button>
                </CardFooter>
            </Card>
        </div>
    );
}

export default Ctfans;
