import React, { createContext, useEffect, useState} from "react";
import { baseURL } from '../utils/constant.js';

export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart = {};
    for (let index = 0; index < 300+1; index++){
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [all_product,setAll_product] = useState([]);

    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(() => {
        fetch(`${baseURL}/allproducts`)
        .then((response) => {
            console.log("Response:", response);
            return response.json();
        })
        .then((data) => {
            setAll_product(data);
    
            if(localStorage.getItem('auth-token')){
                return fetch(`${baseURL}/getcart`,{
                    method:'POST',
                    headers:{
                        Accept:'application/form-data',
                        'auth-token':`${localStorage.getItem('auth-token')}`,
                        'Content-Type':'application/json',
                    },
                    body:"",
                })
                .then((response) => response.json())
                .then((data) => setCartItems(data))
                .catch((error) => console.error("Error fetching cart items:", error));
            }
        })
        .catch((error) => console.error("Error fetching products:", error));
    }, []);
    
    
    const addToCart = (itemId) => {
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}));
        if(localStorage.getItem('auth-token')){
            fetch(`${baseURL}/addtocart`,{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((response)=>response.text())
            .then((data)=>console.log(data));
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
        if(localStorage.getItem('auth-token')){
            fetch(`${baseURL}/removefromcart`,{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((response)=>response.text())
            .then((data)=>console.log(data));
        }
    }

    const getTotalCartAmount = () => {
        let total = 0;
        for (const item in cartItems){
            if (cartItems[item] > 0){
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                total += itemInfo.new_price * cartItems[item];
            }
        }
        return total;
    }

    const getTotalCartItems = () =>{
        let totalItems = 0;
        for (const item in cartItems){
            if(cartItems[item] > 0){
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    }
    
    const contextValue = {all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems};

    console.log(cartItems);


    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;