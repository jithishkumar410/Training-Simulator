import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import axios from 'axios';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import Swal from 'sweetalert2'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import ReactConfetti from 'react-confetti';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"


const Vcd = () => {
    let { cid,vid } = useParams();
    const [dat,setdat] = useState({})
    const [tes,settes]=useState({})
    const [ans,setans]=useState('')
    const [st,setst]=useState(false)
    const [w,setw]=useState({width:window.innerWidth,height:window.innerHeight})
   
   

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/cot${cid}/`)
        .then((res)=>{
            
            setdat(res.data)
            
        })
        .catch((err)=>{
            console.log({'err':err})
        })
    },[cid]);
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/ts${vid}/`)
        .then((res)=>{
            
            settes(res.data)
            
        })
        .catch((err)=>{
            console.log({'err':err})
        })
    },[vid]);
    console.log(tes,dat)


    function che(){
        if(ans==tes.ans){
            setst(true)
            Swal.fire({
                icon: "success",
                title: "Correct Answer!",
                showConfirmButton: false,
                timer: 1500
              });
            setInterval(()=>{
               setst(false)
            },20000)
            
        }
        else{
            alert("wrong")
        }
    }
  
  return (
    <div className='bg-black h-screen overflow-hidden'>
         {st?(<ReactConfetti width={w.width} height={w.height} gravity={0.3} />):(null)}
      <div className=' relative top-6 left-6'>
      <a href={`/home/learn/cd/${cid}`} className='bg-lime-500 py-1 px-4 text-xl border border-lime-500 hover:text-lime-500 hover:bg-slate-950 rounded'>Back</a>
      
      </div>
     
      <div className='flex ml-10 mt-16 gap-6 justify-evenly'>
  <Card className="w-[48rem] bg-white ">
      <iframe 
      className='rounded-lg w-[48rem] h-[24rem]' 
      src={dat.vilink} title="YouTube video player"  
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen>
      </iframe>
      <CardHeader>
      <CardTitle>{dat.vhead}</CardTitle>
      </CardHeader>
      <CardContent>
      <CardDescription className='text-lg'>
           {dat.vdes1}
      </CardDescription>
      </CardContent>
      
      </Card>

{/* test */}

<Card className='w-[32rem] bg-white'>
        <CardHeader>
            <CardTitle>Quiz!</CardTitle>
            
        </CardHeader>
        
        <CardContent className='mt-5'>
        <CardTitle>{tes.test1}</CardTitle>
<RadioGroup className='mt-8'>
    <div className="flex items-center space-x-2"  onClick={(e)=>{
            setans(e.target.value)
        }}>
        <RadioGroupItem className='border-2 border-lime-500 text-lime-500' value={tes.o1} id="option-one" />
        <Label htmlFor="option-one" className='text-lg'>{tes.o1}</Label>
   </div>
  <div className="flex items-center space-x-2" onClick={(e)=>{
            setans(e.target.value)
        }}>
       <RadioGroupItem className='border-2 border-lime-500 text-lime-500' value={tes.o2} id="option-two" />
       <Label htmlFor="option-two" className='text-lg'>{tes.o2}</Label>
  </div>
  <div className="flex items-center space-x-2" onClick={(e)=>{
            setans(e.target.value)
        }}>
        <RadioGroupItem className='border-2 border-lime-500 text-lime-500' value={tes.o3} id="option-t" />
        <Label htmlFor="option-t" className='text-lg'>{tes.o3}</Label>
  </div>
  <div className="flex items-center space-x-2" onClick={(e)=>{
            setans(e.target.value)
        }}>
        <RadioGroupItem className='border-2 border-lime-500 text-lime-500' value={tes.o4} id="option-f" />
        <Label htmlFor="option-f" className='text-lg'>{tes.o4}</Label>
  </div>
</RadioGroup>
        </CardContent>
        <CardFooter>
            <Button className='border-2 border-lime-500 rounded' onClick={che}>Submit</Button>
        </CardFooter>
      </Card>

      </div>

    </div>
  )
}

export default Vcd
