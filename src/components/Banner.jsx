import React, { useEffect, useState } from 'react'
import axios from '../axios'
import requests from '../requests'
import {FaPlay} from 'react-icons/fa'
import { IoInformationCircleOutline } from 'react-icons/io5'

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);

      setMovie ( request.data.results[Math.floor(Math.random() * request.data.results.length -1)]);
      return request;
    }
    fetchData();
  }, []);

  //console.log(movie);

  return (
    <header className='object-contain w-full h-96 md:h-[40rem] space-y-2 px-5 md:px-12 text-white flex-row items-center' style={{ backgroundSize: "cover", backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`, backgroundPosition: "center center" }} >

      <h1 className='text-bold max-w-sm md:max-w-xl text-shadow-lg pt-32 md:pt-48 text-2xl md:text-3xl lg:text-5xl'>{movie?.title || movie?.name || movie?.original_name}</h1>
      <p className='max-w-xs md:max-w-md mt-4 text-xs text-shadow-lg pt-1 md:text-sm lg:text-base'>{movie?.overview}</p>

      <div className='flex gap-x-3 pt-3 text-shadow-lg'>
        <button className="banner__button bg-white text-black">
          <FaPlay className='h-5 w-5' /> Play
        </button>
        <button className="banner__button bg-[#6d6d6eb3] items-center"><IoInformationCircleOutline className='h-7 w-7' /> More info</button>
      </div>
    </header>
  )
}

export default Banner