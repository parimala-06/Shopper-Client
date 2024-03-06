import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const displayProductImage = (base64Image) => {
  return `data:image/png;base64,${base64Image}`;
};

const Item = (props) => {
  return (
    <div className='item'>
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={displayProductImage(props.image)} alt="" /></Link>
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
            ${props.new_price}
            </div>
            <div className="item-price-old">
            ${props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Item