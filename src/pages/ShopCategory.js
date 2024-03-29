import React, { useContext } from 'react'
import './Css/ShopCategory.css'
import {ShopContext} from '../context/ShopContext.js'
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import Item from '../components/Item/Item.js'

const ShopCategory = (props) => {

  const {all_product} = useContext(ShopContext);

  if (!all_product) {
    return <div>Loading...</div>; // or any other loading indicator
  }

  return (
    <div className='shopcategory'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-7</span> out of 21 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-product">
        {all_product.map((item,i)=>{
          if(props.category === item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory