import { Link } from "react-router-dom"
function Item({id,tit,imag,cat,area,text})
{
    return(
        <div className="flex flex-col w-[80%] my-5 py-5 px-3 rounded-lg shadow-md bg-yellow-50 dark:bg-stone-900  opacity-85 hover:scale-105 duration-300">
            <Link to={`/${id}`}>   
                <div className="flex flex-row gap-3 p-3">
                    <img src={imag} className="w-52 rounded-lg m-3"/>
                    <p>
                        <span className="text-4xl text-lime-900 dark:text-white font-semibold font-mono block">{tit}</span>
                    <p className="font-mono text-md text-green-900 dark:text-rose-300"> {cat}</p>
                    <p className="font-mono italic mb-2 text-md dark:text-rose-300"> {area}</p>
                    <p className="font-sora line-clamp-4 text-lg dark:text-white "> {text}</p>
                    </p>
                </div>
            </Link>
        </div>
    )
}
export default Item