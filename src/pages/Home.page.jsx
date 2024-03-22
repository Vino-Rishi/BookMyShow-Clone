import React from 'react'
import { useState } from 'react'
import DefaultLayoutHoc from '../layout/Default.layout'

// Components
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.Components';
import EntertainmentCardComponent from '../components/Entertainment/EntertainmentCardComponent'
import PosterSlider from '../components/PosterSlider/PosterSlider.Component'


const HomePage = () => {
  const [recommendedMovies] = useState([]);  // ,setRecommendedMovies
  const [premierMovies] = useState([]);   // ,setPremierMovies
  const [onlineStreamEvents] = useState([]); // ,setOnlineStreamEvents
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
        subject = "List of recommended movies"
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
        subject = "List of premier movies"
        posters = {premierMovies}
        isDark = {true}
        />
      </div>
    </div>
  </div>
      <div className='container mx-auto px-4 md:px-12 my-8'>
      <PosterSlider
        title = "Online Stream Events"
        subject = "List of online stream events"
        posters = {onlineStreamEvents}
        isDark = {false}
        />
      </div>
    </>

    )
}

export default DefaultLayoutHoc(HomePage)