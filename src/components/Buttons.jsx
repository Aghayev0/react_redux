import React from 'react'

const Buttons = () => {
  let i = parseInt(1)
  return (
    <div className='mainHomebtn'>
      <button >Previous page</button>
      <p>Page {i}</p>
      <button >Next Page</button>
    </div>
  )
}

export default Buttons