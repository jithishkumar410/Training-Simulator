
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './home'
import Reg from './register';
import Login from './login';
import Userhome from './userhome';
import Learn from './learn';
import Codetails from './codet';
import Vcd from './vcd';
import Ctf from './ctf';
import Ctfans from './ctfans';
import Lab from './lab';
import Labmenu from './labmenu';
import Profile from './profile';
import Contri from './contri';
import Ar from './ar'
function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Home />} ></Route>
    <Route path='/login' element={<Login/>} ></Route>
    <Route path='/register' element={<Reg/>} ></Route>
    <Route path='/home' element={<Userhome/>} ></Route>
    <Route path='/home/learn' element={<Learn/>}></Route>
    <Route path='/home/learn/cd/:cid' element={<Codetails />}></Route>
    <Route path="/home/learn/cd/:cid/vcd/:vid" element={<Vcd />} />
    <Route path="/home/ctf" element={<Ctf />}/>
    <Route path="/home/ctf/:cif" element={<Ctfans />}/>
    <Route path='/home/lab' element={<Labmenu/>} ></Route>
    <Route path='/home/lab/com' element={<Lab/>} ></Route>
    <Route path='/Profile/:name' element={<Profile/>} ></Route>
    <Route path='/home/contri' element={<Contri/>} ></Route>
    <Route path='/home/AR' element={<Ar/>} ></Route>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
