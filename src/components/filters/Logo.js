import React from 'react'

export default function Logo ({ linkLogo }) {
  return (
    <div className='content__logo-container'>
      <a className='content__logo-link' href='#'>
        <img className='content__logo-image' src={linkLogo.logo.link} />
      </a>
    </div>
  )
}
