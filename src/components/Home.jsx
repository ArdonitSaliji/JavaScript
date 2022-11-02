import React from 'react'
import '../ulqin.css'
const Home = () => {
  return (
    <div className='center'>
      <h1 className='ballH'>Welcome to our Restaurant</h1>
      <div className='images'>
        <img src={process.env.PUBLIC_URL + '/images/coktel.jpg'} alt='' />
        <img src={process.env.PUBLIC_URL + '/images/enjoy.jpg'} alt='' />
        <img src={process.env.PUBLIC_URL + '/images/v-ushqim.jpg'} alt='' />
        <img src={process.env.PUBLIC_URL + '/images/cakes.jpg'} alt='' />
      </div>
    </div>
  )
}

export default Home
