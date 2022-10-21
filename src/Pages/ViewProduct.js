import { Rating, Snackbar } from "@mui/material";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserProductData } from "../App";
import MuiAlert from '@mui/material/Alert';
import LoaderCmp from "../Layout/LoaderCmp";

export default function ViewProduct() {
  const {getProduct, newGetProduct, newGetCategoriesData, newFilterData}=useContext(UserProductData)

const navigate = useNavigate();
   const { id } = useParams();
  const [product, setProduct] = useState();
   const [imgState,setImgState]=useState(product?.images[0])
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  
  const { vertical, horizontal, open } = state;

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
  const productApi = () => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((json) => 
      setProduct(json));
  };
  const addToCart = (newState) => {
    setState({ open: true, ...newState });

    const quantityAdd=newGetProduct&&newGetProduct?.map(item=>({...item,total:0,quantity:1}))
    console.log("quantityAdd",quantityAdd)
    const localstorageData = [];
    localstorageData.push(product);
    const localstorageDataAdd = localstorageData.concat(JSON.parse(localStorage.getItem("cartItem") || "[]"));
    const filterData=quantityAdd.filter(ele=>localstorageDataAdd.find(item=>item.id===ele.id))
    localStorage.setItem("cartItem", JSON.stringify(filterData));
  };  

     const imagesData=[{url:product?.images[0]},{url:product?.images[1]},{url:product?.images[2]}]
     
     
     useEffect(() => {
       setImgState(product?.images[0])
       productApi();
  }, [product?.images[0]]);
  
  console.log("product",product)
  return (
    <div>
      <div className="container-fluid">
        <div className="row" style={{ paddingTop: "80px" }}>
          {
            product&&product.length!==0 ?
           <>
            <div className="col-md-6" style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
              {imagesData.map(item=>{
                return(
                  <img src={item.url} width="135px" onClick={()=>setImgState(item.url)} style={{borderRadius:"8px",cursor:"pointer"}} />
                )
              })
              }
            </div>
            <img src={imgState} width="357px" style={{borderRadius:"10px"}}/>
          </div>
          <div className="col-md-6" style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
          <div className="text-top">
            <h3>{product?.category?.name}</h3>
            <h1>{product?.title}</h1>
            <div className="d-flex">
              <span style={{ fontWeight: "600", marginRight: "10px" }}>
                Rating
              </span>{" "}
              <Rating
                name="read-only"
                value=""
                readOnly
              />
            </div>
            <h1 style={{ fontWeight: "600" }}>${product?.price}</h1>
            <p>{product?.description}</p>
          </div>
          <div className="bottom-button d-flex">
            <button
             type="button" class="btn btn-dark"
              style={{ marginRight: "30px" }}
              onClick={() => addToCart({
                vertical: 'bottom',
                horizontal: 'left',
              })}
            >
              Add to Cart
            </button>
            <button type="button" class="btn btn-dark" onClick={()=>{navigate('/cart')}}>
              Go to Cart
            </button>
            <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      message=" Cart Item success"
      key={vertical + horizontal}
    />
          </div>
        </div>
           </>
        : <LoaderCmp/>
          }
          
          
        </div>
      </div>
    </div>
  );
}
