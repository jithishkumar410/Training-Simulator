import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Tb from './tb';
import axios from 'axios';
import { Button } from "@/components/ui/button";
import ReactConfetti from 'react-confetti';
// import { useNavigate } from 'react-router-dom'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"


function Codetails() {
    let { cid } = useParams();
    const [dat,setdat] = useState([])
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/cd${cid}/`)
        .then((res)=>{
            
            setdat(res.data)
            
        })
        .catch((err)=>{
            console.log({'err':err})
        })
    },[]);
     
    return (
       <div>
        <div className='fixed top-6 right-6 flex gap-4'>
        <a href={`/home/learn`} className='bg-lime-500 py-1 px-4 text-xl border border-lime-500 hover:text-lime-500 hover:bg-slate-950 rounded'>Back</a>
        <Tb/>
        </div>

        
    <div>


        <div className='mt-20 flex gap-4 flex-col justify-center w-screen items-center'>
                {dat.map((v,i)=>(
                    <Card key={i} className='w-[60%] max-sm:w-[90%] border-2 border-lime-500'>
                    <CardHeader>
                           <CardTitle>{i}. {v.vhead} </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>{v.vdes1}</CardDescription>
                    </CardContent>
                    <CardFooter>
                       <a href={`/home/learn/cd/${cid}/vcd/${v.vid}`} className='border-2 border-lime-500 rounded' ><Button>Watch</Button></a>
                    </CardFooter>
                    </Card>
                ))}
            
        </div>
    </div>
        </div>
      
    );
}

export default Codetails
