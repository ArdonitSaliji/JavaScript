import React from 'react'

const Drinks = () => {
  return (
    <div>
      <div className='beverages'>
        <div className='bevContent'>
          <div className='item'>
            <h1>Hot Drinks</h1>
            <img src={process.env.PUBLIC_URL + '/images/cdrinks.jpg'} alt='' />
            <h3>Item: Price</h3>
          </div>
          <div className='item'>
            <h1>Cold Drinks</h1>
            <img src={process.env.PUBLIC_URL + '/images/caffe.jpg'} alt='' />
            <h3>Item: Price</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Drinks
