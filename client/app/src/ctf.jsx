import Tb from "./tb"
import { useEffect, useState } from "react"
import axios from 'axios'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card"
import { Button } from "./components/ui/button"
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
 } from "@/components/ui/dialog"
import Ctfans from "./ctfans"

const Ctf = () => {
    const [data,setdata]=useState([])
    const [cat,setcat]=useState([])
   

  useEffect(()=>{
     axios.get('http://127.0.0.1:8000/ctf/')
     .then((res)=>{
        setdata(res.data)
     })
     .catch((err)=>{
        console.log(err)
     })
  },[])

  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/cactf/')
    .then((res)=>{
       setcat(res.data)
    })
    .catch((err)=>{
       console.log(err)
    })
 },[])

 function geet(s){
    axios.post('http://127.0.0.1:8000/ctf/',{'cn':s})
    .then((res)=>{
       setdata(res.data)
    })
    .catch((err)=>{
       console.log(err)
    })

 }

  return (
    <div>
      <div className="fixed right-6 top-5 flex gap-4 ">
      <a href={`/home`} className=' bg-lime-500 py-1 px-4 text-xl border border-lime-500 hover:text-lime-500 hover:bg-slate-950 rounded'>Back</a>
      <Tb/>
      </div>
      <div className="flex gap-4 ">
           <Card className="h-screen w-[15rem] flex flex-col gap-5">
            <CardTitle className="text-center mt-4 bg-lime-500 p-2">Catagories</CardTitle>
            <a href="#" onClick={()=>{
                    geet('all')
                 }}  className="mt-5 text-xl font-semibold pl-5 rounded border-white p-1 border-2 hover:border-lime-500 ">All</a>


             {cat.map((v,i)=>(
                 <a href="#" className="text-xl font-semibold pl-5 rounded border-white p-1 border-2 hover:border-lime-500 "
                 onClick={()=>{
                    geet(v.catname)
                 }}    key={i}>{v.catname}</a>
             ))}
           </Card>


      <div className="flex gap-4 justify-center mt-28 flex-wrap ">
          {
            data.map((v,i)=>(
                <Card key={i} className="w-[23rem] h-[18rem]">
                    <CardHeader>
                        <CardTitle>{v.cq}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription >{v.cdes}</CardDescription>
                        
                    </CardContent>
                    
                    <CardFooter className="flex justify-between">
                     <div>
                        <CardDescription>Points:- {v.cp}</CardDescription>
                        <CardDescription>Author:- {v.caut}</CardDescription>
                        </div>
                        {v.diff=='easy' ?<CardDescription>Difficulty <span className="p-1 bg-green-400 rounded">{v.diff}</span></CardDescription>: v.diff=='medium'?<CardDescription>Difficulty <span className="p-1 bg-orange-400 rounded">{v.diff}</span></CardDescription>:<CardDescription>Difficulty <span className="p-1 bg-red-500 rounded">{v.diff}</span></CardDescription>}
                    </CardFooter>
                    <Dialog>
      <DialogTrigger>
        <a href={`/home/ctf/${v.cif}`}> <Button className="border-2 border-lime-500 m-2 ml-5">Solve</Button></a>
      </DialogTrigger>
      <DialogContent>
             <Ctfans />
      </DialogContent>
        </Dialog> 
                </Card>
            ))
          }
      </div>
      </div>
    </div>
  )
}

export default Ctf
