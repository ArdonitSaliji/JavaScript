/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BsFillCameraFill } from 'react-icons/bs'
import { FaGreaterThan } from 'react-icons/fa'

import './Signup.css'

const Signup = ({ signUp, setSignUp, setLogin }) => {
  const [state, setState] = useState({
    password: '',
    emailOrPhone: '',
    password2: '',
  })
  const [message, setMessage] = useState()
  const [sliderState, setSliderState] = useState(0)
  const [defaultImages, setDefaultImages] = useState(false)
  const defaultColors = [
    'linear-gradient( 129.1deg,  rgba(243,199,83,1) 26.8%, rgba(18,235,207,1) 114.1% )',
    'linear-gradient( 65.9deg,  rgba(85,228,224,1) 5.5%, rgba(75,68,224,0.74) 54.2%, rgba(64,198,238,1) 55.2%, rgba(177,36,224,1) 98.4% )',
    'linear-gradient( 109.6deg,  rgba(6,2,2,1) 32.4%, rgba(137,30,47,1) 98.8% )',
    'linear-gradient( 113.3deg,  rgba(217,9,27,1) 6.9%, rgba(22,68,150,1) 75% )',
    'linear-gradient( 90.3deg,  rgba(4,251,16,1) -0.3%, rgba(251,250,16,1) 64.3% )',
    'linear-gradient( 109.6deg,  rgba(255,174,0,1) 11.2%, rgba(255,0,0,1) 100.2% )',
  ]
  const gradientImages = defaultColors.map((color) => (
    <li
      style={
        defaultImages
          ? { transform: 'translateY(-4rem)', backgroundImage: color }
          : { transform: 'translateY(0)', backgroundImage: color }
      }
    >
      <span>A</span>
    </li>
  ))
  const submitInfo = async (e) => {
    try {
      const res = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ emailOrPhone: state.emailOrPhone, password: state.password }),
      })
      if (res.status === 201) {
        setMessage('Account created successfully')
        setTimeout(() => {
          setMessage('')
          setSliderState(50)
        }, 500)
      }
      if (res.status === 409) {
        e.preventDefault()
        setMessage('Account already exists')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const passwordIsNotMatching = (e) => {
    if (state.password.length < 1 && state.password2.length < 1) {
      setMessage('Password must be longer than 8 characters')
      e.preventDefault()
    } else {
      if (state.password !== state.password2) {
        e.preventDefault()
        setMessage('Sorry, your passwords need to be the same.')
      } else {
        e.preventDefault()
        submitInfo(e)
      }
    }
  }

  return (
    <div className='signup-container'>
      {!signUp &&
        setState({
          password: '',
          emailOrPhone: '',
          password2: '',
        })}
      <div className='signup-forms'>
        <div style={{ transform: `translateX(-${sliderState}%)` }} className='signup-slider'>
          <form
            onSubmit={(e) => {
              passwordIsNotMatching(e)
            }}
            className='signup'
          >
            <AiOutlineClose
              style={{ right: '53%' }}
              onClick={() => setSignUp(false)}
              className='signup-x'
            />
            <h1 className='signup-title'>Sign up</h1>
            <div className='signup-inputs'>
              <input
                onChange={(e) => setState({ ...state, emailOrPhone: e.target.value })}
                value={state.emailOrPhone}
                type='text'
                placeholder='Phone Number or Email'
                required
              />
              <input
                onChange={(e) => setState({ ...state, password: e.target.value })}
                value={state.password}
                type='password'
                placeholder='Password'
                required
              />

              <input
                onChange={(e) => setState({ ...state, password2: e.target.value })}
                value={state.password2}
                type='password'
                placeholder='Re-enter Password'
                required
              />
            </div>
            <p
              className='wrong-password'
              style={
                message === 'Account created successfully' ? { color: 'green' } : { color: 'red' }
              }
            >
              {message}
            </p>

            <button className='signup-btn'>Sign up</button>
            <span>
              <hr /> <p>OR</p> <hr />
            </span>
            <div className='signup-acc'>
              <p>Have an account?</p>
              <a
                style={{ textDecoration: 'underline' }}
                onClick={() => {
                  setSignUp(false)
                  setTimeout(() => setLogin(true), 200)
                }}
              >
                Login
              </a>
            </div>
          </form>
          <form className='upload-container'>
            <AiOutlineClose onClick={() => setSignUp(false)} className='signup-x' />
            <h2>Upload your image </h2>
            <div className='upload'>
              <div className='upload-image'>
                <BsFillCameraFill />
              </div>
              <button type='button'>Choose image</button>
            </div>
            <div className='upload-defaults'>
              <a onClick={() => setDefaultImages((prev) => !prev)}>
                <FaGreaterThan
                  style={!defaultImages && { transform: 'rotate(90deg)' }}
                  className='upload-arrow'
                />
                Or choose one of our defaults
              </a>

              {
                <ul>
                  {gradientImages}
                  {/* <li
                    style={
                      defaultImages
                        ? { transform: 'translateY(-4rem)' }
                        : { transform: 'translateY(0)' }
                    }
                  >
                    <span>A</span>
                  </li>
                  <li
                    style={
                      defaultImages
                        ? { transform: 'translateY(-4rem)' }
                        : { transform: 'translateY(0)' }
                    }
                  >
                    <span>A</span>
                  </li>
                  <li
                    style={
                      defaultImages
                        ? { transform: 'translateY(-4rem)' }
                        : { transform: 'translateY(0)' }
                    }
                  >
                    <span>A</span>
                  </li>
                  <li
                    style={
                      defaultImages
                        ? { transform: 'translateY(-4rem)' }
                        : { transform: 'translateY(0)' }
                    }
                  >
                    <span>A</span>
                  </li>
                  <li
                    style={
                      defaultImages
                        ? { transform: 'translateY(-4rem)' }
                        : { transform: 'translateY(0)' }
                    }
                  >
                    <span>A</span>
                  </li>
                  <li
                    style={
                      defaultImages
                        ? { transform: 'translateY(-4rem)' }
                        : { transform: 'translateY(0)' }
                    }
                  >
                    <span>A</span>
                  </li> */}
                </ul>
              }
            </div>
            <div className='upload-finish'>
              <p>Skip for now</p>
              <button type='button'>Finish</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
