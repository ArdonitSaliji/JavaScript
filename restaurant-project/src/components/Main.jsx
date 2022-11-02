import React, { useState } from 'react'
import '../ulqin.css'
import Item from './Item'
import allItems from './allItems'
import Drinks from './Drinks'
import Choices from './Choices'
const Main = () => {
  const items = allItems.map((item, index) => <Item key={index} image={item.img} price={item.price} title={item.title} desc={item.description} />)
  const [container, setContainer] = useState(items)

  const showAll = (e) => {
    const filterItems = items.map((it) => it).filter((item) => item.props.title === e.target.innerHTML)
    setContainer(filterItems)
  }

  const showDrinks = () => {
    setContainer(<Drinks />)
  }
  const showFood = () => {
    setContainer(items)
  }
  return (
    <div className='container'>
      <Choices showItems={items} showAll={showAll} showDrinks={showDrinks} showFood={showFood} />
      <div className={container === items ? 'foods' : 'beverages'}>{container}</div>
    </div>
  )
}

export default Main
