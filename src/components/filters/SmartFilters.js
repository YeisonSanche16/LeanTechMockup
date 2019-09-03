import React from 'react'

export default function SmartFilters (filterItems) {
  return (
    <div className='content__smart-filter-container'>
      <h1 className='content__smart-filter-title'>
        <span>Smart Filters</span>
      </h1>
      <ul className='content__smart-filter-wrapper'>
        {
          filterItems.setFilterItems()
        }
      </ul>
    </div>
  )
}
