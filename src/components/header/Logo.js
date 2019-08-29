import React from 'react'

export default function Logo ({ dataHeader }) {
  return (
    <div className='header__logo-container'>
      <a className='header__link-Logo' href='#'>
        <img className='header__logo-image' src={dataHeader.logo.link} />
      </a>
    </div>
  )
}
