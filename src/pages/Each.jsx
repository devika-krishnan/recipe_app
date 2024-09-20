import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import {useParams} from 'react-router-dom'
import { Link } from "react-router-dom";

function Each()
{
    const [item,setItem]=useState()
    const {id} = useParams()
    const [alist,setList]=useState()
    const [isLoading,setIsLoading]=useState()

    useEffect(()=>{
        setIsLoading(true)
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((res)=>
        {
            setItem(res.data)
            setIsLoading(false)
        })
        .catch(()=>console.log("error"))

    },[id])
    
    useEffect(()=>{
        if(item?.meals && item.meals.length>0)
        {
            const cat=item?.meals[0].strCategory
            axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
            .then((res)=>
            {
                setList(res.data)
            })
        }
    },[item])

    function togg()
    {
        localStorage.dark=localStorage.dark == "true" ? "false" : "true"
        document.documentElement.classList.toggle("dark")
    }

    return(
        <div className="dark:bg-gray-950 min-h-svh flex flex-col select-none duration-300">
            <Link to="/"><span className="material-symbols-outlined text-lime-800 font-semibold text-3xl m-3 dark:text-red-100 absolute">home</span></Link>
            <button onClick={togg}><span className="m-4 text-red-100 text-3xl dark:block hidden material-symbols-outlined  absolute right-0">light_mode</span></button>
            <button onClick={togg}><span className="m-4 text-lime-800 font-semibold text-3xl dark:hidden block material-symbols-outlined  absolute right-0">dark_mode</span></button>
        {!isLoading && <div> <div className="my-24 mx-16 bg-yellow-50 rounded-3xl p-9 dark:opacity-80 duration-300 dark:bg-gray-900 dark:text-blue-200">
                {item && <div className="flex flex-row gap-5 items-center">
                    <div className="flex flex-col gap-3 font-sora text-md">
                        <h1 className="font-bold font-mono text-5xl text-lime-700 dark:text-red-100">{item.meals[0].strMeal}</h1>
                        <p className="px-3 w-[97%] text-justify leading-5">{item.meals[0].strInstructions}</p>
                        <a href={item.meals[0].strYoutube} className=" text-sm underline my-4 text-lime-700 dark:text-red-100">{item.meals[0].strYoutube}</a>
                    </div>
                    <img className="w-72 h-72 rounded-lg" src={item.meals[0].strMealThumb} alt="food"/>
                </div>}
             </div>
             
            <p className="text-4xl text-center w-full font-sora font-semibold text-lime-900 dark:text-blue-200">Similar food from {item?.meals[0].strCategory} category</p>
            <div className="flex flex-wrap gap-9 p-5 dark:bg-gray-950 items-center justify-center my-5">
                    {alist?.meals.map((it)=>
                        <Link onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} key={it.idMeal} to={`/${it.idMeal}`}> 
                            <div className="flex flex-col w-80 h-80 gap-5 bg-yellow-50 dark:bg-gray-900  rounded-lg p-4 items-center ">
                                <h2 className="text-lime-700 dark:text-red-100  text-center text-md font-sora">{it.strMeal}</h2>
                                <img className=" rounded-lg w-52" src={it.strMealThumb}/>
                            </div>
                        </Link>
                    )}
            </div></div>}
            {isLoading && <span className="text-center text-4xl dark:text-white font-mono w-full block justify-center my-20">Loading...</span>}
        </div>
    )
}
export default Each