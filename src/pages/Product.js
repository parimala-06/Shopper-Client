import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=>e.id=== Number(productId));
  console.log(product.category);
  return (
    <div>
      <BreadCrumb product = {product}/>
      <ProductDisplay product = {product}/>
      <DescriptionBox/>
      <RelatedProducts product = {product.category}/> 
    </div>
  )
}

export default Product