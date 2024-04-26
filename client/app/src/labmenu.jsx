
import { Button } from "@/components/ui/button";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import ter from './assets/971.jpg'
import com from './assets/computer-with-binary-code-screen_1308-115006.jpg'


function Labmenu() {
  return (
    <div className="flex justify-center items-center h-screen gap-8">
        <div className="fixed top-6 left-6">
        <a href="/home"><Button className='bg-lime-500 py-3 px-4  text-xl rounded border border-lime-500 hover:text-lime-500 hover:bg-slate-950 '>Back</Button></a>
        </div>
        <Card className="w-[20rem] border-lime-500">
            <CardHeader>
              <img src={ter} alt='text' className="rounded"></img>
              <CardTitle className="mt-2">Online Complier</CardTitle>
            </CardHeader>
            <CardContent>
            <CardDescription>
               Pratice python programing
            </CardDescription>
            </CardContent>
            <CardFooter>
                   <a href="/home/lab/com"><Button className='bg-lime-500 py-3 px-4  text-xl rounded border border-lime-500 hover:text-lime-500 hover:bg-slate-950 '>Pratice</Button></a>
            </CardFooter>
        </Card>

        <Card className="w-[20rem] border-lime-500">
            <CardHeader>
              <img src={com}  alt='text' className="rounded h-[13rem]"></img>
              <CardTitle>Online Terminal</CardTitle>
            </CardHeader>
            <CardContent>
            <CardDescription>
               Pratice Linux in Terminal
            </CardDescription>
            </CardContent>
            <CardFooter>
                   <a href="https://copy.sh/v86/?profile=linux26&ref=itsfoss.com" target="blank"><Button className='bg-lime-500 py-3 px-4  text-xl rounded border border-lime-500 hover:text-lime-500 hover:bg-slate-950 '>Pratice</Button></a>
            </CardFooter>
        </Card>
    </div>
  )
}

export default Labmenu