import { useState } from "react";
import react from "./assets/react.svg"

function App() {
  const [open,setOpen] = useState<boolean>(false);
  const items:string[] = ["Home","About Us","Services","Contact"];
  return (
    <>
    <div className="min-h-screen relative ">
    <nav className="h-auto fixed w-screen  md:h-16 flex items-center bg-[#3498db] justify-between px-10 py-6 shadow-lg">
      <div><img className=" animate-spin" src={react} alt="" /></div>
      <div className="md:hidden flex" onClick={()=>setOpen(!open)}>
      {open? 
      <div className="relative flex">
      <span className="w-10 h-1 bg-white rounded-md absolute right-2 rotate-45"></span>
      <span className="w-10 h-1 bg-white rounded-md absolute right-2 rotate-[-45deg] "></span>
    </div>
       : 
      <div className="flex flex-col gap-1">
      <span className="w-10 h-1 bg-white rounded-md"></span>
    <span className="w-10 h-1 bg-white rounded-md"></span>
    <span className="w-10 h-1 bg-white rounded-md"></span>
    </div>
      }
      </div>
      <div className={`md:flex-row md:flex gap-4 absolute md:static left-0 rounded-lg md:w-auto md:p-0 w-full p-6 top-14 text-center bg-[#3498db] ${open? "flex flex-col ": "hidden"}`}>{
        items.map((item,index)=>(
          <a className="text-white hover:text-[#2c3e50]  transition-all ease-linear duration-500 hover:underline hover:underline-offset-4 " key={index} href="#">{item}</a>
        ))
      }</div>
    </nav>
    </div>
    </>
  )
}

export default App
