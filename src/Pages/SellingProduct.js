import React, { useEffect, useState } from 'react'

export default function SellingProduct() {
const [loginData,setLoginData]=useState()
const [productData,setProductData]=useState()

  const getLocalStoregeData=()=>{
         const getLoginData=JSON.parse(localStorage.getItem("loginData"))
             setLoginData(getLoginData)
         const getData=JSON.parse(localStorage.getItem("buyData"))
         const getCartItem=JSON.parse(localStorage.getItem("cartItem"))
        Array.prototype.push.apply(getData,getCartItem);
        setProductData(getData)
        }


  useEffect(() => {
    getLocalStoregeData()
  }, [])
console.log("productData",productData)
  return (
    <div>
      <div class="table-wrapper">
        <table class="fl-table">
          <thead>
            <tr>
              <th>Order No.</th>
              <th>Name</th>
              <th>Card No.</th>
              <th>Email</th>
              <th>Title</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
    {/* {
      productData &&productData?.map((item)=>{
        return(
          <>
          <td>{item.orderNumber}</td>
          <td>{item.cardHolderName}</td>
          <td>{item.cardNo}</td>
          <td>{loginData.email}</td>
          <td>{item.title}</td>
          <td>{item.quantity}</td>
          <td>{item.price}</td>
          </>
        )
      })
    } */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
