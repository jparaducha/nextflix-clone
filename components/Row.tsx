import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { useRef, useState } from "react";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { Movie } from "../typings";
import Thumbnail from "./Thumbnail";

interface Props {
    title : string
    movies : Movie[]
}


export default function Row({title, movies}: Props) {
    const rowRef = useRef<HTMLDivElement>(null);
    const [isMoved, setIsMoved] = useState(false);

    let firstClick = false;
    const handleClick = (direction: string)=>{
        setIsMoved(true);
        
        if(rowRef.current){
            const { scrollLeft , clientWidth} = rowRef.current;

            const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            rowRef.current.scrollTo({left: scrollTo, behavior : "smooth"});
        }
        // if(rowRef.current!.scrollLeft < rowRef.current!.clientWidth && rowRef.current!.scrollLeft !== 0 && !firstClick){
        //     setIsMoved(false);
        // }
        // console.log(rowRef.current!.scrollLeft , rowRef.current!.clientWidth);
    }


  return (
    <div className="h-40 space-y-0.5 md:space-y-5">
        <h2 className="w-56 cursor-pointer text-sm md:text-2xl font-semibold text-[#e5e5e5] transition duration-200 hove:text-white">{title}</h2>
        <div className="group relative md:ml-2 overflow-hidden">
            <ChevronLeftIcon onClick={()=> handleClick("left")}  className={`absolute top-0 left-2 bottom-0 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${!isMoved && "hidden"}`}/>

            <div ref={rowRef} className="flex items-center space-y-0.5 overflow-x-scroll md:space-x-1.5 md:p-2 scrollbar-hide">
                { movies.map(movie=>{
                
                return <Thumbnail key={movie.id} movie={movie}/>
                    })}
            </div>

            <ChevronRightIcon onClick={()=> handleClick("right")} className="absolute top-0 right-2 bottom-0 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100" />
        </div>
    </div>
  )
}
