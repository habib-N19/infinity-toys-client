import React, { useEffect } from 'react'
import Banner from '../Banner/Banner'
import Gallery from '../Gallery/Gallery'
import NewsLetter from '../NewsLetter/NewsLetter'
import SubCategory from '../SubCategory/SubCategory'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Helmet } from 'react-helmet'
import CustomerRating from '../CustomerRating/CustomerRating'

const Home = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div>
      <Helmet>
        <title>Infinity Toys | Home</title>
      </Helmet>
      <Banner></Banner>
      <SubCategory></SubCategory>
      <Gallery></Gallery>
      <CustomerRating></CustomerRating>
      <NewsLetter></NewsLetter>
    </div>
  )
}

export default Home
