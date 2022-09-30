
import React from 'react'
import FeaturedBrands from '../app/components/Home/FeaturedBrands'
import HomeCategory from '../app/components/Home/HomeCategory'
import HomeHero from '../app/components/Home/HomeHero'
import HomePosters from '../app/components/Home/HomePosters'
import TodaysDeals from '../app/components/Home/TodaysDeals'
import ProductDetails from '../app/components/Product/ProductDetails'
import ProductMoreInfo from '../app/components/Product/ProductMoreInfo'

export default function Home (){
  return(
    <>
      <HomeHero/>
      <HomeCategory />
      <FeaturedBrands />
      <TodaysDeals />
      <HomePosters />
      <ProductDetails />
      <ProductMoreInfo/>
    </>
  )
}