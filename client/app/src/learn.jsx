import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { ScrollArea} from "@/components/ui/scroll-area"
  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

import Tb from "./tb";
function Learn() {
    const history = useNavigate();
    const [data, setdata] = useState([]);
    const [cat, setcat] = useState([]);
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
    const f =()=>{
        axios.get('http://127.0.0.1:8000/co/')
            .then((res)=>{
                console.log(res.data)
                setdata(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/cat/')
    
        .then((res) => {
            
        f()
        setcat(res.data);
        })
        .catch((err) => {
            console.log('cat:', err);
        });
    }, []); 

    
  function add(c){
      axios.post('http://127.0.0.1:8000/add/',{ui,'ci':c})
      .then((res)=>{
        console.log(res.data)
      })
      .catch((err) => {
        console.log('cat:', err);
    });
  }
     
    function getcat(c) {
        axios.post('http://127.0.0.1:8000/co/', { 'cn': c })
        .then((res) => {
            setdata(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return (
        <div className="">
            
            
<div className="absolute right-6 top-5 flex gap-4 z-10 ">
<a href="http://localhost:3000/home/" className='bg-lime-500 py-1 px-4 text-xl border border-lime-500 hover:text-lime-500 hover:bg-slate-950 rounded'>Back</a>
      <Tb/>
    </div>
     
            <div className="flex gap-10 ">
           
                <div>

                    <Card className="w-[18rem] h-screen flex flex-col items-center gap-6 bg-black text-lime-500 ">
                        <a className="mt-7 w-[100%] text-xl ease-in-out  hover:border-lime-500 hover:text-lime-500 hover:border-2 p-2 rounded" onClick={() => getcat('all')}>All</a>
                        {cat.map((v, i) => (
                            <a href="#" className="w-[100%] text-xl duration-0 hover:border-lime-500 hover:text-lime-500 hover:border-2 p-2 rounded" onClick={() => getcat(v.catname)} key={i}>{v.catname}</a>
                        ))}
                    </Card>
                </div>
   

                <ScrollArea className="h-screen" orientation="horizontal">
                    <div className="flex gap-4 flex-wrap mt-32 mb-10">
                        {data.map((v, i) => (
                            <Card key={i} className="w-[23rem] border-2 border-lime-500 bg-white">
                                <CardHeader className="flex items-center flex-col bottom-2">
                                    <img className="w-[100%] h-[12rem]" src={`http://127.0.0.1:8000${v.cimg}`} />
                                    <CardTitle>{v.corname}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>{v.cdes1}</CardDescription>
                                </CardContent>
                                <CardFooter className="flex flex-wrap justify-evenly ">
                                    <CardDescription className="bg-lime-500 p-1 px-6 rounded text-black"> {v.dur}</CardDescription>
                                    <CardDescription className="bg-lime-500 p-1 px-4 rounded text-black"> {v.author}</CardDescription>
                                </CardFooter>
                                <div className="flex justify-center pb-4">
                                {v.enc?<a href={`/home/learn/cd/${v.courseid}`}><Button className="bg-lime-500 text-black border-lime-500 border hover:text-lime-500 hover:bg-slate-950 rounded">Enrolled</Button></a>:
                                
                                <Dialog>
                                <DialogTrigger asChild>
                                <Button className="bg-lime-500 text-black border-lime-500 border hover:text-lime-500 hover:bg-slate-950 rounded">Learn</Button>
                                </DialogTrigger>

                                <DialogContent className="sm:max-w-[425px] bg-white">
                               <DialogHeader>
                                 <DialogTitle>Confirmations</DialogTitle>
                                 <DialogDescription>
                                  Are you to enroll to this course
                                 </DialogDescription>
                               </DialogHeader>
                               <DialogFooter className="flex gap-4">
                               <a href={`/home/learn/cd/${v.courseid}`}><Button onClick={()=>{add(v.courseid)}} className="bg-lime-500 text-black border-lime-500 border hover:text-lime-500 hover:bg-slate-950 rounded">Confirm</Button></a>
                               <Button className="bg-lime-500 text-black border-lime-500 border hover:text-lime-500 hover:bg-slate-950 rounded">Cancel</Button>
                               </DialogFooter>
                               </DialogContent>
                                </Dialog>
                                }
                                </div>
                            </Card>
                            
                        ))}
                    </div>
                </ScrollArea  >

            </div>
        </div>
    );
}

export default Learn;
