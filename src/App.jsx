import { useEffect } from "react"
import Home from "./pages/Home"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Each from "./pages/Each"
function App() {

  useEffect(()=>{
    if(localStorage.dark == "true") document.documentElement.classList.add("dark")
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<Each/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App
