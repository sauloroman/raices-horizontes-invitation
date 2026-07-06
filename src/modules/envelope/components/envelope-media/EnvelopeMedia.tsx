import React from 'react'

// import logo from '@/assets/images/logo-bg.jpeg'
import './_envelope-media.scss'

export const EnvelopeMedia: React.FC = () => {
  return (
    <div className='envelope-media'>
      <div className="envelope-media__overlay"></div>
      <img className='envelope-media__content' src={''} alt='Enfermería Logo' />
    </div>
  )
}
