import { Movie } from "../typings";
import  Image  from "next/image";


const baseImgUrl = "https://image.tmdb.org/t/p/w500";

interface Props {

    movie: Movie
}

function Thumbnail({ movie}: Props) {
  return (
    <div className="relative h-28 min-w-[180px] transition duration-200 md:h-36 md:min-w-[260px] md:hover-scale-105">
        <Image
        src={baseImgUrl + movie.backdrop_path || movie.poster_path}
        layout="fill"
        className="rounded-sm object-cover md:rounded"
        />
    </div>
  )
}

export default Thumbnail