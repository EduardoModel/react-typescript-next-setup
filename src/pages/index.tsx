import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import octocat from '../assets/Octocat.jpg'
import { Container } from '../styles/pages/Home'

// Define the type of the component type that is been generated
const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <h1>Hello little World</h1>
      <h5>A little octocat for u</h5>
      <p>because he is awsome</p>
      <Image src={octocat} alt="Octocat" />
    </Container>
  )
}

export default Home
