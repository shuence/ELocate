import React from 'react'
import Hero from './Hero'
import Features from './Features'
import FAQ from './FAQ'

type Props = {}

const Home = (props: Props) => {
  return (
    <>
    <Hero/>
    <Features/>
    <FAQ/>
    </>
  )
}

export default Home