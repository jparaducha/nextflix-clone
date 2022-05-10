import Image from "next/image";
import { useState, useEffect } from "react";
import { Movie } from "../typings";
import { FaPlay } from "react-icons/fa";
import { InformationCircleIcon } from "@heroicons/react/outline";

const baseImgUrl = "https://image.tmdb.org/t/p/original";

interface Props {
    netflixOriginals : Movie[]
}

export default function Banner({ netflixOriginals }: Props) {
    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(() => {
      setMovie(netflixOriginals[Math.floor(Math.random()* netflixOriginals.length)])
        console.log(netflixOriginals[0])
    }, [netflixOriginals])
    

    useEffect(()=>{

        console.log(movie, " <--película de Banner")
    }, [movie])

    let fightClub = "https://image.tmdb.org/t/p/original/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg"

    let imgUrl = baseImgUrl + (movie?.backdrop_path || movie?.poster_path);
    let title = movie?.title || movie?.name || movie?.original_name;

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
            
            {/* <img src={imgUrl}
            className="object-cover"
            /> */}
            <Image src={imgUrl}
            layout="fill"
            // className="w-screen h-[800px] z-20"
            className="object-cover"
            />

            
          {/* <Image src={"https://image.tmdb.org/t/p/original/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg"}
          layout="fill"/> */}
        </div>
        
        <div className="lg:mt-96 lg:pb-1 text-shadow-md ">
        <h1 className=" z-30 text-2xl lg:text-7xl font-bold">{title}</h1> {/* z-index sólo funciona en elementos posicionados !!!*/}
        <p className="z-30 max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">{movie?.overview}</p>
        </div>


        <div className="z-30 flex space-x-3">
            <button className="bannerButton bg-white text-black"><FaPlay className="h-4 w-4 text-black md:h-7 md:w-7"/> Play</button>
            <button className="bannerButton bg-[gray]/70">More Info<InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8"/>
            </button>
        </div>
    </div>
  )
}
