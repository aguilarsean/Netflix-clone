import React from 'react'
import Banner from './components/Banner'
import Nav from './components/Nav'
import Row from './components/Row'
import requests from './requests'

const App = () => {
  return (
    <>
        <Nav/>
        <Banner />
        <Row sliderID='1' title="Only on Netflix" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
        <Row sliderID='2' title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row sliderID='3' title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row sliderID='4' title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row sliderID='5' title="Comedy" fetchUrl={requests.fetchComedyMovies} />
        <Row sliderID='6' title="Horror" fetchUrl={requests.fetchHorrorMovies} />
        <Row sliderID='7' title="Romance" fetchUrl={requests.fetchRomanceMovies} />
        <Row sliderID='8' title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        <Row sliderID='9' title="Upcoming" fetchUrl={requests.fetchUpcoming} />
    </>
  )
}

export default App