import React from 'react'

const Item = (props) => {
  return (
    <div>
      <div className='item'>
        <div className='itemImg'>
          <img src={process.env.PUBLIC_URL + '/' + props.image} alt='' />
        </div>

        <h3>Item: Price</h3>
        <hr />
        <p>Description</p>
      </div>
    </div>
  )
}

export default Item
