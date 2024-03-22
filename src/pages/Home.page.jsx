import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import DefaultLayoutHoc from '../layout/Default.layout'

// Components
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.Components';
import EntertainmentCardComponent from '../components/Entertainment/EntertainmentCardComponent'
import PosterSlider from '../components/PosterSlider/PosterSlider.Component'


const HomePage = () => {
  const [recommendedMovies,setRecommendedMovies] = useState([]);  
  const [premierMovies,setPremierMovies] = useState([]); 
  const [onlineStreamEvents,setOnlineStreamEvents] = useState([]);

  useEffect(()=>{
  const requestPopularMovies = async()=>{
    const getPopularMovies = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=837d3932ef21e9e180806f9400c7ffe0');
    setPremierMovies(getPopularMovies.data.results);
  };
    requestPopularMovies();
  },[]);

  useEffect(()=>{
  const requestTopRatedMovies = async()=>{
    const getTopRatedMovies = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=837d3932ef21e9e180806f9400c7ffe0');
    setRecommendedMovies(getTopRatedMovies.data.results);
  };
    requestTopRatedMovies();
  },[]);

  useEffect(()=>{
    const requestUpcomingMovies = async()=>{
      const getUpcomingMovies = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=837d3932ef21e9e180806f9400c7ffe0');
      setOnlineStreamEvents(getUpcomingMovies.data.results);
    };
      requestUpcomingMovies();
    },[]);

  return (
    <>
    <HeroCarousel /> 
    <div className='container mx-auto px-4 md:px-12 my-8'>
      <h1 className='text-2xl font-bold text-gray-700 sm:ml-3 ml-0 my-3'>
        The Best Of Entertainment
      </h1>
      <EntertainmentCardComponent />
    </div>
    
    <div className='container mx-auto px-4 md:px-12 my-8'>
      <PosterSlider
        title = "Recommended Movies"
        subtitle = "List of recommended movies"
        posters = {recommendedMovies}
        isDark = {false}
        />
    </div>
  <div className='bg-premier-800 py-12'>
          <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
            <div className='hidden md:flex'>
              <img src="" alt="Rupay" className='w-full h-full'/>
            </div>

    <div className='container mx-auto px-4 md:px-12 my-8'>
      <PosterSlider
        title = "Premier Movies"
        subtitle = "List of premier movies"
        posters = {premierMovies}
        isDark = {true}
        />
      </div>
    </div>
  </div>
      <div className='container mx-auto px-4 md:px-12 my-8'>
      <PosterSlider
        title = "Online Stream Events"
        subtitle = "List of online stream events"
        posters = {onlineStreamEvents}
        isDark = {false}
        />
      </div>
    </>

    )
}

export default DefaultLayoutHoc(HomePage)