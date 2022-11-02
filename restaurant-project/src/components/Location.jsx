import React from 'react'
import '../ulqin.css'
const Location = () => {
  return (
    <div className='map-container'>
      <iframe
        className='map'
        title='map'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10131.690300413073!2d21.058809650236398!3d42.079619668014054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4bff0eab64393d35!2sVeranda%20Ulqin!5e1!3m2!1sen!2smk!4v1656685123028!5m2!1sen!2smk'
        width='600'
        height='450'
        style={{ border: 0 }}
        allowfullscreen=''
        loading='lazy'
        referrerpolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  )
}

export default Location
