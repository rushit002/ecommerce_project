import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Button } from "@mui/material";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Cart.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { UserProductData } from "../App";
import EmptyShopping from "../Layout/EmptyShopping";


export default function Cart() {
  const { productCart,quantityAdd,quantityRemoveFunction,subTotal,setSubTotal,removeOneItem,removeAllData} = useContext(UserProductData)
   const navigate=useNavigate()
  const subTotalFunction = () => {
    const subTotalData = productCart&&productCart.reduce((prev, curr) => prev + curr.total, 0)
    console.log("subTotal", subTotalData)
    setSubTotal(subTotalData)
  }
useEffect(() => {
  subTotalFunction()
}, [subTotal])

  return (
    <div className="cart-page">
  {
    productCart&&productCart &&productCart.length>0 ?
    <>
       <div className="cart-Container">
     <div className="header">
   <h4 className="heading">Shopping Cart</h4>
   <h5 className="action" onClick={()=>removeAllData()}>Remove All</h5>
     </div>
  <div>
          {
            productCart && productCart.map((item) => {
              return (
                <div>
                  <div class="Cart-Items">
                    <div class="image-box">
                      <img src={item.images} style={{ height: "120px", borderRadius: "20px" }} />
                    </div>
                    <div class="about" style={{ width: "400px" }}>
                      <h1 class="title" >{item.title}</h1>
                      <h3 class="subtitle">{item.category.name}</h3>
                    </div>
                    <div class="counter">
                      <button type="button" class="btn btn-outline-dark"  onClick={() => quantityRemoveFunction(item)} >-</button>
                      <div class="count">{item.quantity}</div>
                      <button type="button" class="btn btn-outline-dark" onClick={() => quantityAdd(item)}>+</button>
                    </div>
                    <div class="prices">
                      <div class="amount">${item.total===0?item.price:item.total}</div>
                      <button style={{ color: "red", backgroundColor: "white", border: "none", display: "flex", padding: "0px" }} onClick={()=>removeOneItem(item)}><DeleteIcon sx={{ width: "16px" }} /> Remove</button>
                    </div>
                  </div>
                  <hr></hr>
                </div>
              )
            })
          }
  </div>
<div style={{display:"flex",width:"100%",justifyContent:"flex-end"}}>
 <div class="checkout">
 <div class="total">
 <div>
 <div class="Subtotal">Sub-Total</div>
 <div class="items">{productCart&&productCart?.length} items</div>
 </div>
 <div class="total-amount">${subTotal}</div>
 </div>
 <button class="button" onClick={()=>navigate('/checkout')}>Checkout</button>
 </div>
</div>
     </div>
    </>: <EmptyShopping/>
  }
      </div>
  );
}
