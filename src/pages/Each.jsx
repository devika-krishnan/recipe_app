import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import {useParams} from 'react-router-dom'
function Each()
{
    const [item,setItem]=useState()
    const {id} = useParams()
    useEffect(()=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((res)=>
        {
            setItem(res.data)
        })
        .catch(()=>console.log("error"))

    },[])
    function togg()
    {
        localStorage.dark=localStorage.dark == "true" ? "false" : "true"
        document.documentElement.classList.toggle("dark")
    }
    return(
        <div className="dark:bg-green-950 h-svh">
            <button onClick={togg}><span className="p-2 text-lime-900 text-3xl dark:hidden material-symbols-outlined  absolute right-0">dark_mode</span></button>
            <button onClick={togg}><span className="p-2 text-yellow-100 text-3xl dark:block hidden material-symbols-outlined  absolute right-0">light_mode</span></button>
            <div className="m-10 bg-yellow-50 rounded-3xl p-4 dark:bg-slate-700">
                {item && <div className="flex flex-row gap-5">
                    <img className="w-72 rounded-lg" src={item.meals[0].strMealThumb} alt="food"/>
                    <div className="flex flex-col gap-3 font-sora text-lg">
                        <h1 className="font-bold font-mono text-3xl text-lime-700">{item.meals[0].strMeal}</h1>
                        <p className="">{item.meals[0].strInstructions}</p>
                        <a href={item.meals[0].strYoutube} className=" text-lg underline text-lime-700">{item.meals[0].strYoutube}</a>
                    </div>
                </div>}
             </div>
        </div>
    )
}
export default Each