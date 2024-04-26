import axios from 'axios'
import {useEffect, useState} from 'react'
import Tb from "./tb";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { useParams } from 'react-router-dom';
  import { Button } from "@/components/ui/button";
 

  import { ScrollArea } from "@/components/ui/scroll-area"

const Profile = () => {
    let { name } = useParams();
    const [id,setid]=useState()
    const [cdata,setcdata]=useState([])
    const [tdata,settdata]=useState([])

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
              
                setid(response.data.userid)
            })
            .catch(error => {
                console.error('Home:', error);
                if (error.response && error.response.status === 401) {
                    history('/');
                }
            });
        }
    }, []); 
     
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/getuc/${name}/`)
        .then((res)=>{
            console.log(res.data)
            setcdata(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])


    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/getcc/${name}/`)
        .then((res)=>{
            console.log(res.data)
            settdata(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])





  return (
    <div className='flex justify-center items-center h-screen flex-col bg-gray-100'>
        <div className="fixed right-6 top-5 flex gap-4 ">
      <a href={`/home`} className='bg-lime-500 py-1 px-4 text-xl border border-lime-500 hover:text-lime-500 hover:bg-slate-950 rounded'>Back</a>
      <Tb/>
    </div>
    <div className='flex flex-col gap-4 items-center justify-center'>
      <div className='flex gap-6 justify-center mt-10'>
        <div >
            <Card className='w-[15rem] bg-white'>
                <CardHeader>
                   <CardTitle className='text-xl'> Username :- {name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription className='text-lg'>
                    User ID:- {id}
                    </CardDescription>
                   
                </CardContent>
               
            </Card>
        </div>
      
        <div>
        <Card className='w-[15rem] bg-white'>
                <CardHeader>
                   <CardTitle> Courses Enrolled </CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription className='text-lg'>
                     Count:-  {cdata.length}
                    </CardDescription>
                   
                </CardContent>
               
            </Card>
        </div>
        <div>
        <Card className='w-[15rem] bg-white'>
                <CardHeader>
                   <CardTitle> CTF Solved </CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription className='text-lg'>
                    Count:- {tdata.length}
                    </CardDescription>
                   
                </CardContent>
               
            </Card>
        </div>
        <div>
        <Card className='w-[15rem] bg-white'>
                <CardHeader>
                   <CardTitle> Contributions </CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription className='text-lg'>
                   0
                    </CardDescription>
                   
                </CardContent>
               
            </Card>
        </div>
      </div>


    <div className='flex gap-6'>
    <ScrollArea className=" rounded-md border">
        <Card className='w-[30rem] h-[60vh] bg-white'>
            <CardTitle className='m-2 text-center'>Enrolled Courses</CardTitle>
    {cdata.map((v, i) => (
                <div key={i} className='m-3 border-2 border-lime-500 p-3 rounded '>
                    <div className='flex justify-between'>
                  <CardTitle>{v.corname}</CardTitle>
                  <CardDescription>{v.dur}</CardDescription>
                  </div>
                  <a href={`/home/learn/cd/${v.courseid}`}>
                    <Button className="bg-lime-500 text-black mt-4 border-lime-500 border hover:text-lime-500 hover:bg-slate-950 rounded">View</Button>
                  </a>
                 
                </div>
              ))}
        </Card>
    </ScrollArea>
    <ScrollArea className=" rounded-md border">
        <Card className='w-[30rem] h-[60vh] bg-white'>
        <CardTitle className='m-2 text-center'>Completed CTF</CardTitle>
    {tdata.map((v, i) => (

                <div key={i} className='m-3 border-2 border-lime-500 p-3 rounded'>
                    <div className='flex gap-5 justify-between w-[100%]'>
                  <CardTitle>{v.cq}</CardTitle>
                  {v.diff=='easy' ?<CardDescription>Difficulty <span className="p-1 bg-green-400 rounded">{v.diff}</span></CardDescription>: v.diff=='medium'?<CardDescription>Difficulty <span className="p-1 bg-orange-400 rounded">{v.diff}</span></CardDescription>:<CardDescription>Difficulty <span className="p-1 bg-red-500 rounded">{v.diff}</span></CardDescription>}
                  <CardDescription>{v.cp} Points</CardDescription>
                  </div>
                  <a href={`/home/ctf/${v.cif}`}> <Button className="bg-lime-500 text-black mt-4 border-lime-500 border hover:text-lime-500 hover:bg-slate-950 rounded">View</Button></a>
                  
                </div>
              ))}
        </Card>
    </ScrollArea>
    </div>
    </div>
    </div>
  )
}

export default Profile
