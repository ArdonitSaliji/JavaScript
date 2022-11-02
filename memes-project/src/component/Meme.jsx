/* eslint-disable default-case */
import React, { useState, useEffect } from 'react'
import Draggable from 'react-draggable'
const Meme = () => {
  const [meme, setMeme] = useState({
    randomImage: 'https://i.imgflip.com/1g8my4.jpg',
  })
  const [randomMeme, setRandomMeme] = useState()
  const [fontState, setFontState] = useState(3)
  const [allMemes, setAllMemes] = useState([])
  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((obj) => setAllMemes(obj.data.memes))
  }, [])

  function getMemeImage() {
    const randomMeme = allMemes[Math.floor(Math.random() * allMemes.length)].url

    setMeme((prev) => ({
      ...prev,
      randomImage: randomMeme,
    }))
  }

  function handleChange(event) {
    const { name, value } = event.target
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }))
  }
  const decideSize = (el) => {
    let fs = (el.target.style.fontSize = fontState + 'rem')
    const fs1 = fs.split('r')

    switch (el.button) {
      case 0:
        setFontState((prev) => (prev += 0.5))
        el.target.style.fontSize = fs1[0] + 'rem'
        break
      case 1:
        setFontState((prev) => (prev -= 0.5))
        el.target.style.fontSize = fs1[0] + 'rem'
    }
  }

  return (
    <main>
      <div className='form'>
        <input
          onChange={handleChange}
          value={meme.topText || ''}
          name='topText'
          className='form-input'
          type='text'
          placeholder='Top text'
        />
        <input
          onChange={handleChange}
          value={meme.bottomText || ''}
          name='bottomText'
          className='form-input'
          type='text'
          placeholder='Bottom text'
        />
      </div>
      <div className='form__button-div'>
        <button className='form-button' onClick={getMemeImage}>
          Get a new meme image 🖼️
        </button>
      </div>

      <div className='meme'>
        <img src={meme.randomImage} className='meme-image' alt='img' />
        <Draggable>
          <h2 onPointerUp={(e) => decideSize(e)} className='meme-text top'>
            {meme.topText}
          </h2>
        </Draggable>
        <Draggable>
          <h2 onPointerUp={(e) => decideSize(e)} className='meme-text bottom'>
            {meme.bottomText}
          </h2>
        </Draggable>
      </div>
    </main>
  )
}

export default Meme

// Todo
// Add input that can display extra text

//  html and css to do so
//         ↓ ↓ ↓ ↓

/* <div className='form__add-div'>
        <input
          className='form__add-input'
          name='randomMeme'
          type='text'
          placeholder='Add more meme text'
        />
        <button className='form__add-button' onClick={handleChange}>
          Add more text
        </button>
      </div> */
