import React,{useState, useEffect} from 'react'
import './NewCollections.css'
// import new_collections from '../Assets/new_collections'
import Item from '../Item/Item.js'
import {baseURL} from '../../utils/constant.js'

const NewCollections = () => {
 
    const [new_collections, setNew_collections] = useState([]);

    const displayProductImage = (base64Image) => {
        return base64Image;
      };

      useEffect(() => {
        fetch(`${baseURL}/newcollection`)
            .then((response) => response.json())
            .then((data) => {
                console.log("New collections data:", data);
                setNew_collections(data);
            })
            .catch((error) => console.error("Error fetching new collections:", error));
    }, []);

    return (  
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
            {new_collections.map((item,i)=>{ 
                return <Item key={i} id={item.id} name={item.name} image={displayProductImage(item.image)} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default NewCollections