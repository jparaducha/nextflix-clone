import { BellIcon, SearchIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(()=>{
        const setScrolled = ()=> {
            if(window.scrollY > 0){
                setIsScrolled(true);
            }else{
                setIsScrolled(false);
            }
        }

            window.addEventListener("scroll", setScrolled)

            return () => {
            window.removeEventListener("scroll", setScrolled);
            }
        }
    , [])


  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
        <div className="flex items-center space-x-2 md:space-x-10">
            <img
            src= "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            width = {100}
            height = {100}
            className= "cursor-pointer object-contain"
            />

        <ul className="hidden space-x-4 md:flex">
            <li className="headerLink">Home</li>
            <li className="headerLink">TV Shows</li>
            <li className="headerLink">Movies</li>
            <li className="headerLink">New & Popular</li>
            <li className="headerLink">My List</li>
        </ul>
        </div>


        <div className="flex items-center space-x-4 text-sm font-light">
            <SearchIcon className="hidden sm:inline h-6 w-6"/>
            <p className="hidden lg:inline">Kids</p>
            <BellIcon className="h-6 w-6"/>
            <Link href="/account">
                <img src="https://i.pinimg.com/474x/aa/64/a1/aa64a1ee094b8f798053b51800c622fb.jpg"
                alt=""
                className="cursor-pointer rounded h-6 w-6 space-x-2 md:space-x-10"/>
            </Link>
        </div>
    </header>
  )
}
