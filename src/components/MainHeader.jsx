import React from 'react'

function MainHeader ({ onKeywordChange }) {
  return (
    <section className='main-header'>
      <h2>Welcome to Notes Apps</h2>
      <input
        type='text'
        placeholder='Search your note...'
        onChange={event => onKeywordChange(event.target.value)}
      />
    </section>
  )
}

export default MainHeader
