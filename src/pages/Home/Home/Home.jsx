import React, { useEffect } from 'react'
import Banner from '../Banner/Banner'
import Gallery from '../Gallery/Gallery'
import NewsLetter from '../NewsLetter/NewsLetter'
import TopToys from '../TopToys/TopToys'
import SubCategory from '../SubCategory/SubCategory'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <SubCategory></SubCategory>
      <TopToys></TopToys>
      <NewsLetter></NewsLetter>
    </div>
  )
}

export default Home
