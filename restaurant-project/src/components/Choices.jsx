import React from 'react'

const Choices = (props) => {
  return (
    <div>
      <div className='zgjedhjet'>
        <div onClick={props.showFood} className='foodbtn'>
          <h1>Food</h1>
        </div>
        <div onClick={props.showDrinks} className='drinks'>
          <h1>Drinks</h1>
        </div>
      </div>
      <div className='btns'>
        <button onClick={props.showFood} className='all'>
          <p>All </p>
        </button>
        <button onClick={props.showAll} className='pizzaBtn'>
          <p>Pizza</p>
        </button>
        <button onClick={props.showAll} className='meatBtn'>
          <p>Meats</p>
        </button>
        <button onClick={props.showAll} className='pastaBtn'>
          <p>Pasta</p>
        </button>
        <button onClick={props.showAll} className='saladBtn'>
          <p>Salads</p>
        </button>
        <button onClick={props.showAll} className='dessertBtn'>
          <p>Dessert</p>
        </button>
      </div>
    </div>
  )
}

export default Choices
