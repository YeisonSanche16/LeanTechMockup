import React from 'react'

export default function Logo () {
  return (
    <div className='content__status-filter'>
      <h2 className='content__status-filter-title'>
        <span>Status</span>
      </h2>
      <form className='content__status-filter-form'>
        <input className='content__status-filter-input' type='text' />
      </form>
      <div className='content__status-filter-container-button'>
        <button className='content__status-filter-button'>DELIVERED</button>
      </div>
    </div>
  )
}
