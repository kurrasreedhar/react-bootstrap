import {Navbar} from "./components/Navbar";
import {Newsboard} from "./components/Newsboard" ;
import { useState } from "react"



function App() {
  
const [category,setcategory]=useState("general")
  return (
    <>
    
    <Navbar  setcategory={setcategory}/>
    <Newsboard category={category}/>

    </>
  )
}

export default App
