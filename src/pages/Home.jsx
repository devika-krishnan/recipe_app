import imag from '../assets/back.2avif.avif'
import imag1 from '../assets/back.avif'
import Item from '../component/item'
import axios from 'axios'
import { useState } from 'react'
function Home()
{
    const [itemList,setItemList]=useState([])
    const[isLoading,setIsLoading]=useState(false)
    function item(evt)
    {
        setIsLoading(true)
        evt.preventDefault()
        const el=document.getElementById("in")
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${el.value}`)
        .then((res)=>
        {
            setItemList(res.data.meals)
            setIsLoading(false)
        })
        .catch(()=>console.log("err"))
    }
    function tog()
    {
       localStorage.dark = localStorage.dark == 'true'? false : true
       document.documentElement.classList.toggle("dark")
    }
    return(
        <div className="">
            <img src={imag} alt="salad" className="dark:hidden h-svh w-full fixed -z-10"/>
            <img src={imag1} alt="salad" className="dark:block hidden h-svh w-full fixed -z-10"/>
            <button onClick={tog}><span className="dark:hidden  material-symbols-outlined text-yellow-200 text-3xl p-3 absolute right-0 select-none">dark_mode</span></button>
            <button onClick={tog}><span className="dark:block hidden material-symbols-outlined text-yellow-200 text-3xl p-3 absolute right-0 select-none">light_mode</span></button>
            <div className="select-none my-8 absolute p-3 w-full ">
                <svg fill="#f7ef97" height="100px" width="100px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M13,11c0.6,0,1-0.4,1-1s-0.4-1-1-1c-5,0-9,4-9,9c0,2.8,2.2,5,5,5s5-2.2,5-5s-2.2-5-5-5c-0.3,0-0.7,0-1,0.1 C9.3,11.8,11,11,13,11z"></path> <path d="M23,13c-0.3,0-0.7,0-1,0.1c1.3-1.3,3-2.1,5-2.1c0.6,0,1-0.4,1-1s-0.4-1-1-1c-5,0-9,4-9,9c0,2.8,2.2,5,5,5s5-2.2,5-5 S25.8,13,23,13z"></path> </g> </g></svg>
                <div className="flex flex-col items-center w-full gap-16">
                    <h1 className="text-yellow-100 font-cursive text-6xl m-8">Bringing world flavors to your table</h1>
                    <form onSubmit={item} className="flex flex-row items-center gap-6">
                        <input id="in" autoComplete='off' placeholder="Enter the dish..."  type="text" className="justify-center rounded-3xl dark:bg-cyan-950 dark:opacity-90 w-96 dark:border-b-black dark:text-yellow-100 dark:placeholder-yellow-100 outline-none p-1 border-b-yellow-200 text-2xl font-mono text-lime-800 bg-yellow-50  text-center border-b-2"/>
                    </form>
                </div>
                <div>
                    {!isLoading && itemList?.map((item)=><Item key={item.idMeal} id={item.idMeal} tit={item.strMeal} imag={item.strMealThumb} cat={item.strCategory} area={item.strArea} text={item.strInstructions}/>)}
                    {isLoading && <span className="text-center text-4xl text-white font-mono w-full block m-5">Loading...</span>}
                </div>
            </div>
            
        </div>
    )
}
export default Home