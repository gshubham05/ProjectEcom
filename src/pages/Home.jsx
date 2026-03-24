import React from 'react'
import Hero from '../components/Hero'
import Products from '../components/Products'

import TrendingProduct from '../components/TrendingProduct'
import { RiFacebookCircleFill } from '@remixicon/react'

function Home() {
  return (
    <div>
        <Hero />
        <Products />
        <TrendingProduct />
        <RiFacebookCircleFill />
    </div>
  )
}

export default Home