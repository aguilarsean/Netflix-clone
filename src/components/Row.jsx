import React, { useEffect, useState } from 'react'
import axios from '../axios'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow, sliderID }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    //console.table(movies);

    const slideLeft = () => {
        var slider = document.getElementById('slider' + sliderID);
        slider.scrollLeft = slider.scrollLeft - 900;
    };

    const slideRight = () => {
        var slider = document.getElementById('slider' + sliderID);
        slider.scrollLeft = slider.scrollLeft + 900;
    };

  return (
    <div className='pl-5 mt-10'>
        <h2 className='text-[#e5e5e5] hover:text-white transition duration-200 text-lg font-bold pl-2 md:pl-1 lg:pl-3 cursor-pointer'>{title}</h2>

        <div className='relative group'>
            <MdChevronLeft onClick={slideLeft} className='bg-white rounded-full absolute top-[50%] translate-y-[-50%] opacity-50 hover:opacity-100 transition duration-500 cursor-pointer z-10 hidden group-hover:block' size={40} />
                <div id={'slider' + sliderID} className={`poster_normal ${isLargeRow && 'poster_large'}`}>
                {movies.map(movie => (
                    <img className='posters' src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
                </div>
            <MdChevronRight onClick={slideRight} className='bg-white rounded-full absolute top-[50%] translate-y-[-50%] right-8 opacity-50 hover:opacity-100 transition duration-500 cursor-pointer z-10 hidden group-hover:block' size={40} />
        </div>
    </div>
  )
}

export default Row