import React, {useState, useEffect} from 'react'
import './Popular.css'
// import data_product from '../Assets/data'
import Item from '../Item/Item'
import {baseURL} from '../../utils/constant.js'


const Popular = () => {

  const [popularProducts, setPopularProducts] = useState([]);

  const displayProductImage = (base64Image) => {
    // Assuming base64Image is a base64 encoded string
    return base64Image

  };

  useEffect(() => {
    fetch(`${baseURL}/popularinwomen`)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => setPopularProducts(data))
    .catch((error) => console.error('Error fetching data:', error));
}, []);


  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-item">
            {popularProducts.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={displayProductImage(item.image)} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default Popular