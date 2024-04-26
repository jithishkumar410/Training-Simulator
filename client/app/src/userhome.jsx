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
import Tb from "./tb";
import limg from './assets/limg.png'
import ctf from './assets/ctf.jpg'
import gi from './assets/Nv2.gif'

function Userhome() {
    // const history = useNavigate();
    // const [uname,setname]=useState('')
    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     if (!token) {
          
    //         history('/');
    //     } else {
    //         axios.get('http://127.0.0.1:8000/home/', {
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         })
    //         .then(response => {
    //             setname(response.data.username)
    //             console.log(response.data.userid);
    //         })
    //         .catch(error => {
    //             console.error('Home:', error);
                
    //             if (error.response && error.response.status === 401) {
    //                 history('/'); 
    //             }
    //         });
    //     }
    // }); 

    // function logout() {
        
    //     const token = localStorage.getItem('token');
    
        
    //     if (token) {
    //         axios.get('http://127.0.0.1:8000/logout/', {
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         })
    //         .then(response => {
               
    //             localStorage.removeItem('token'); 
    //             history('/'); 
    //             console.log(response.data);
    //         })
    //         .catch(error => {
    //             console.error('Logout:', error);
    //         });
    //     } else {
            
    //         console.error('Token not available');
    //     }
    // }
    
  
    return (
        <div className="flex justify-center items-center h-screen bg-slate-950  ">
           <div className="fixed right-6 top-5 flex gap-4 ">
           <Tb/>
           </div>
          <div className="fixed left-6 top-5 flex gap-3 items-center  ">
           <img className="w-15 h-10 rounded"  src={limg}></img>
           <p className="text-2xl font-bold text-lime-500">Cyber Trainer</p>
          </div>

        <div className="flex justify-center items-center  flex-wrap gap-6 mx-8">

        <div >
        <Card className="w-[350px] bg-white ">
            
            <CardHeader className="text-black-500 ">
              <CardTitle>Learning</CardTitle>
              <CardDescription>Learn Cyber Sercurity with Videos and Virtual Labs</CardDescription>
              {/* <img src={limg} className="rounded" alt="text" /> */}
            </CardHeader>
            <CardFooter className="flex justify-between">
              <a href="/home/learn">
                <Button className='bg-lime-500 py-3 px-4 text-xl rounded border border-lime-500 hover:text-lime-500 hover:bg-slate-950'>View</Button>
              </a>
            </CardFooter>
     </Card>
                  </div>
          
                  <div>
                       <Card className="w-[350px] bg-white">
                     <CardHeader className="text-black-500">
                       <CardTitle>CTF (Capture The Flag)</CardTitle>
                       <CardDescription>Capture The Flag</CardDescription>
                       {/* <img  src={ctf} className="rounded h-[10.7rem]" alt="text" /> */}
                     </CardHeader>
                     <CardContent>
                      
                     </CardContent>
                     <CardFooter className="flex justify-between">
                     <a href="/home/ctf"> <Button className='bg-lime-500 py-3 px-4  text-xl rounded border border-lime-500 hover:text-lime-500 hover:bg-slate-950 '>Capture</Button></a>
                       
                     </CardFooter>
                   </Card>
        </div>

        <div>
                       <Card className="w-[350px] bg-slate-950 bg-white">
                     <CardHeader className="">
                       <CardTitle >Virtual Lab</CardTitle>
                       <CardDescription>Pratice Cyber Sercurity Using the Lab</CardDescription>
                     </CardHeader>
                     <CardContent>
                       
                     </CardContent>
                     <CardFooter className="flex justify-between">
                     <a href="/home/lab">  <Button className='bg-lime-500 py-3 px-4  text-xl rounded border border-lime-500 hover:text-lime-500 hover:bg-slate-950 ' >View</Button></a>
                      
                     </CardFooter>
                   </Card>
        </div>

        {/* <div>
                       <Card className="w-[350px] bg-slate-950 bg-white">
                     <CardHeader className="">
                       <CardTitle>Cyber Feeds</CardTitle>
                       <CardDescription>Get Update with Cyber news</CardDescription>
                     </CardHeader>
                     <CardContent>
                      
                     </CardContent>
                     <CardFooter className="flex justify-between">
                     
                     <Button className='bg-lime-500 py-3 px-4  text-xl rounded border border-lime-500 hover:text-lime-500 hover:bg-slate-950 ' >Get</Button>
                      
                    
                     </CardFooter>
                   </Card>
        </div> */}


        <div>
                       <Card className="w-[350px] h-[12rem] bg-slate-950 bg-white">
                     <CardHeader className="">
                       <CardTitle>AR and 3D Learning</CardTitle>
                       <CardDescription>Learn Cyber forensic using AR </CardDescription>
                     </CardHeader>
                     <CardContent>
                      
                     </CardContent>
                     <CardFooter className="flex justify-between">
                     
                     <a href="http://127.0.0.1:8000/ar" target="_blank"><Button className='bg-lime-500 py-3 px-4  text-xl rounded border border-lime-500 hover:text-lime-500 hover:bg-slate-950 ' >Learn</Button></a>
                      
                    
                     </CardFooter>
                   </Card>
        </div>

        {/* <div>
    <Card className="w-[350px] h-[13rem] bg-slate-950 bg-white">
                     <CardHeader className="">
                       <CardTitle>Challenges</CardTitle>
                       <CardDescription>Learn and Complete the Challenges</CardDescription>
                     </CardHeader>
                     <CardContent>
                      
                     </CardContent>
                     <CardFooter className="flex justify-between">
                     
                  <a href="http://127.0.0.1:8000/ch"> <Button className='bg-lime-500 py-3 px-4  text-xl rounded border border-lime-500 hover:text-lime-500 hover:bg-slate-950 ' >Contribute</Button></a> 
                      
                    
                     </CardFooter>
                   </Card>
        </div> */}
        </div>
   

        </div>
    );
}

export default Userhome;
