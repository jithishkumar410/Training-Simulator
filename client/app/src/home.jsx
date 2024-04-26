
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <div className='bg-black flex justify-center flex-col items-center h-screen gap-8'>
      <ReactTyped className='text-lime-500 text-[3rem] font-bold max-md:text-[2rem] text-center'
        strings={[
          "Welcome to Cyber Training Site",
          "Learn Cyber Security With virtual Terminal"
        ]}
        typeSpeed={40}
        backSpeed={50}
        
        loop
      />
      <div className='flex gap-4 items-center'>
        <a href='/register' className='bg-lime-500 p-2 px-4  rounded border border-lime-500 hover:text-lime-500 hover:bg-slate-950'>Register</a> 
        <p className='text-lime-500 text-xl font-semibold'>OR</p>
        <a href='/login' className='bg-lime-500 p-2 px-4  rounded border border-lime-500 hover:text-lime-500 hover:bg-slate-950'>Login</a>
      </div>
    </div>
  );
}

export default Home;
