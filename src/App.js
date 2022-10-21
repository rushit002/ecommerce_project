import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Header from "./Layout/Header";
import HomePage from "./Pages/HomePage";
import ViewProduct from "./Pages/ViewProduct";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import { createContext, useEffect, useState } from "react";
import CheckoutProduct from "./Pages/CheckoutProduct";
import SellingProduct from "./Pages/SellingProduct";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ProtectedRoute from "./Pages/ProtectedRoute";
import Clothes from "./Pages/Product/Clothes";
import Electronics from "./Pages/Product/Electronics";
import Furniture from "./Pages/Product/Furniture";
import Others from "./Pages/Product/Others";
import Shoes from "./Pages/Product/Shoes";
import { isEditable } from "@testing-library/user-event/dist/utils";
import Footer from "./Layout/Footer";

export const UserProductData = createContext()
export const CartContext = createContext()

function App() {
  const [getProduct, setGetProduct] = useState([]);
  const [getCategoriesData, setGetCategoriesData] = useState();
  const [filterData, setFilterData] = useState();
  const [newGetCategoriesData, setNewGetCategoriesData] = useState()
  const [newGetProduct, setNewGetProduct] = useState()
  const [newFilterData, setNewFilterData] = useState()
  const [subTotal, setSubTotal] = useState()
  const [productCart, setProductCart] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [quantityRemove, setQuantityRemove] = useState([]);
  const [loginData,setLoginData]=useState()
  const [totalPrice, setTotalPrice] = useState()

  
  const productApi = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(json => {

        json.forEach(element => {
          element.total = 0
          element.quantity = 1
        });
        setGetProduct(json)

      })
  };
  const categoriesApi = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setGetCategoriesData(json));
  };

  const newCategoriesApi = () => {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((res) => res.json())
      .then((json) => setNewGetCategoriesData(json));
  }

  const newProductApi = () => {
    fetch(" https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((json) => setNewGetProduct(json));
  }

  const filterDataFunction = () => {
    const filterData = newGetProduct?.filter((item) => newGetCategoriesData?.find((value) => value.name = item.category.name))
    setNewFilterData(filterData)
  }

  const localStorageGetData = () => {
    const getData = JSON.parse(localStorage.getItem("cartItem"));
    setProductCart(getData);
  };

  const quantityAdd = (item) => {
    if (item) {

      setQuantity((item.quantity = item.quantity + 1));
      setTotalPrice(parseInt(item.total = item.price * item.quantity))
      if (item) {
        const totalPrice = item.price * item.quantity
        console.log("totalPrice", totalPrice)
        const localstorageData = [];
        localstorageData.push(item);
        const localstorageDataAdd = localstorageData.concat(
          JSON.parse(localStorage.getItem("cartItem") || "[]")
        );
        const filterData = productCart?.filter((ele) =>
          localstorageDataAdd.find((item) => item.id === ele.id)
        );
        localStorage.setItem("cartItem", JSON.stringify(filterData));
      }
    }
  };

  const quantityRemoveFunction = (item) => {
    if (item) {
      setQuantityRemove((item.quantity = item.quantity - 1));
      setTotalPrice(parseInt(item.total = item.price * item.quantity))

      console.log("totalprice", totalPrice)
      const localstorageData = [];
      localstorageData.push(item);
      const localstorageDataAdd = localstorageData.concat(
        JSON.parse(localStorage.getItem("cartItem") || "[]")
      );


      const filterData = productCart.filter((ele) =>
        localstorageDataAdd.find((item) => item.id === ele.id)
      );
      localStorage.setItem("cartItem", JSON.stringify(filterData));
    }
  };


  const removeOneItem = (item) => {
   console.log("item",item)
   const removeOneData=productCart.filter((value)=>value!==item)
   console.log("removeOneData",removeOneData)
   const localStorageData=JSON.parse(localStorage.getItem("cartItem"))
   console.log("localStorageData",localStorageData)
   const uniqueIds = [];
   const filterData=localStorageData.filter(element=>{
     const isDuplicate=removeOneData.find(item=>item.id===element.id)
     console.log("isDuplicate",isDuplicate)
     if (isDuplicate) {
      uniqueIds.push(isDuplicate);
  
      return true;
    }
    return false;
   })
console.log("filterData",filterData)  
localStorage.setItem("cartItem",JSON.stringify(filterData))
}

const removeAllData=()=>{
  localStorage.removeItem("cartItem")
}

const loginDataFunction=()=>{
   const loginDataGet=JSON.parse(localStorage.getItem("login"))
   setLoginData(loginDataGet)
   console.log("loginData",loginDataGet)
}

  useEffect(() => {
    loginDataFunction()
    newProductApi()
    newCategoriesApi()
    productApi();
    categoriesApi();
    filterDataFunction()
    localStorageGetData();
  }, []);

  return (
    <div className="App">
      <UserProductData.Provider value={{ removeAllData,quantityAdd, quantityRemoveFunction, removeOneItem, getProduct, setGetProduct, getCategoriesData, setGetCategoriesData, filterData, setFilterData, newGetCategoriesData, newGetProduct, newFilterData, newFilterData, setSubTotal, subTotal, productCart, setProductCart, setQuantity, setQuantityRemove, setTotalPrice, totalPrice }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/' element={<ProtectedRoute Component={HomePage} />} />
            <Route path='/product/:id' element={<ProtectedRoute Component={ViewProduct} />} />
            <Route path='/about/:id' element={<ProtectedRoute Component={Contact} />} />
            <Route path='/selling' element={<ProtectedRoute Component={SellingProduct} />} />
            <Route path='/about' element={<ProtectedRoute Component={About} />} />
            <Route path='/clothes' element={<ProtectedRoute Component={Clothes} />} />
            <Route path='/electronics' element={<ProtectedRoute Component={Electronics} />} />
            <Route path='/furniture' element={<ProtectedRoute Component={Furniture} />} />
            <Route path='/others' element={<ProtectedRoute Component={Others} />} />
            <Route path='/shoes' element={<ProtectedRoute Component={Shoes} />} />
            <Route path='/checkout' element={<ProtectedRoute Component={CheckoutProduct} />} />
            <Route path='/cart' element={<ProtectedRoute Component={Cart} />} />
          </Routes>
      {loginData===true?<Footer/>:""}       
        </BrowserRouter>
      </UserProductData.Provider>
    </div>
  );
}

export default App;
