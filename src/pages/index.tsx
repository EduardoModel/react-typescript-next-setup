import React from 'react'
import Head from 'next/head'

// Define the type of the component type that is been generated
const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <h1>Hello little World</h1>
      </main>
    </div>
  )
}

export default Home
