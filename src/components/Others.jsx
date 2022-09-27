import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Movie from './Movie'
import { MdChevronLeft, MdChevronRight } from "react-icons/md"


const Others = ({title, URL, ID}) => {
    const [movies, setMovies] = useState([])


    useEffect(() => {
        axios.get(URL)
        .then((res) => {
            setMovies(res.data.results)
        })
    }, [URL])

    const slideLeft = () => {
        let slider = document.getElementById("slider" + ID);
        slider.scrollLeft = slider.scrollLeft - 500;
        console.log("clicked left")
    };

    const slideRight = () => {
        let slider = document.getElementById("slider" + ID);
        slider.scrollLeft = slider.scrollLeft + 500;
        console.log("clicked right")
    };

  return (
    <div>
        <h2 className='text-white font-bold md:text-4xl p-4'>{title}</h2>
        <div className='relative flex items-center group'>
            <MdChevronLeft onClick={slideLeft} className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />
            <div id={"slider" + ID} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
                {movies?.map((item, id) => (
                    <Movie item={item}/>
                ))}
            </div>
            <MdChevronRight onClick={slideRight} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />
        </div>
    </div>
  )
}

export default Others