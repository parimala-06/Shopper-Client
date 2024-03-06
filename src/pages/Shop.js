import React from 'react'
import  Hero from '../components/Hero/Hero.js'
import Popular from '../components/Popular/Popular.js'
import Offers from '../components/Offers/Offers.js'
import NewCollections from '../components/NewCollections/NewCollections.js'
import NewsLetter from '../components/NewsLetter/NewsLetter.js'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

export default Shop