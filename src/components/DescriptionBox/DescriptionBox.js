import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews(195)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus et malesuada fames ac. Turpis massa sed elementum tempus egestas sed sed risus. Velit ut tortor pretium viverra suspendisse potenti.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus et malesuada fames ac. Turpis massa sed elementum tempus egestas sed sed risus. </p>
        </div>
    </div>
  )
}

export default DescriptionBox