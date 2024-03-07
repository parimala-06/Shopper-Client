import React, { useEffect, useState } from 'react';
import './RelatedProducts.css';
import Item from '../Item/Item.js';
import { baseURL } from '../../utils/constant';

const RelatedProducts = () => {
  const [relproducts, setRelProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${baseURL}/relatedproducts`);
        if (!response.ok) {
          throw new Error('Failed to fetch related products');
        }
        const data = await response.json();
        setRelProducts(data);
      } catch (error) {
        console.error('Error fetching related products:', error);
      }
    };

    fetchProducts();
  }, []);

  const displayProductImage = (base64Image) => {
    return base64Image;
  };

  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {relproducts.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={displayProductImage(item.image)} new_price={item.new_price} old_price={item.old_price} />;
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;

// import React, { useEffect, useState } from 'react';
// import './RelatedProducts.css';
// import Item from '../Item/Item.js';
// import { baseURL } from '../../utils/constant';

// const RelatedProducts = ({ category }) => {
//   const [relproducts, setRelProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch(`${baseURL}/relatedproducts?category=${category}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch related products');
//         }
//         const data = await response.json();
//         setRelProducts(data);
//       } catch (error) {
//         console.error('Error fetching related products:', error);
//       }
//     };

//     fetchProducts();
//   }, [category]);

//   const displayProductImage = (base64Image) => {
//     return base64Image;
//   };

//   return (
//     <div className='relatedproducts'>
//       <h1>Related Products</h1>
//       <hr />
//       <div className="relatedproducts-item">
//         {relproducts.map((item, i) => {
//           return <Item key={i} id={item.id} name={item.name} image={displayProductImage(item.image)} new_price={item.new_price} old_price={item.old_price} />;
//         })}
//       </div>
//     </div>
//   );
// };

// export default RelatedProducts;
