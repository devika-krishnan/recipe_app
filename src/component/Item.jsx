import { Link } from "react-router-dom"
function Item({id,tit,imag,cat,area,text})
{
    return(
        <div className="flex flex-col m-10 rounded-lg shadow-md bg-yellow-50 dark:bg-slate-900 dark:text-yellow-100 opacity-85 hover:scale-105 duration-300">
            <Link to={`/${id}`}>   
                <div className="flex flex-row gap-3 p-3">
                    <img src={imag} className="w-52 rounded-lg"/>
                    <p className="text-lg ">
                        <span className="text-3xl text-lime-900 dark:text-yellow-400 font-semibold font-mono block">{tit}</span>
                    <p className="font-mono text-2xl text-green-900"> {cat}</p>
                    <p className="font-mono italic mb-2"> {area}</p>
                    <p className="font-serif line-clamp-3 "> {text}</p>
                    </p>
                </div>
            </Link>
        </div>
    )
}
export default Item