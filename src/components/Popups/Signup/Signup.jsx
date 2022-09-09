/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

import './Signup.css'

const Signup = ({ signUp, setSignUp, setLogin }) => {
  const [state, setState] = useState({
    password: '',
    emailOrPhone: '',
    password2: '',
  })
  const [message, setMessage] = useState()
  const [sliderState, setSliderState] = useState(0)

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
          <form className='upload'>
            <AiOutlineClose onClick={() => setSignUp(false)} className='signup-x' />
            <h2>Upload your image </h2>
            <h3>Supported images: PNG, JPG, JPEG.</h3>
            <div className='upload-file'>
              <img src={require('./upload.png')} alt='' />
              <h4>Drag and drop or browse to choose a file</h4>
            </div>
            <div className='upload-buttons'>
              <button onClick={() => setSliderState(0)} type='button'>
                Go back
              </button>
              <button type='button'>Continue</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
