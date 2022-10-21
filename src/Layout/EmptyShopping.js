import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './EmptyShopping.css'

export default function EmptyShopping() {
    const navigate = useNavigate();
  return (
    <div className='empty-page'>
        <div class="container-fluid  mt-100">
				 <div class="row">
				 
					<div class="col-md-12">
					
							<div class="card">
						<div class="">
						</div>
						<div class="card-body cart">
								<div class="col-sm-12 empty-cart-cls text-center" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%"}}>
									<img src="https://i.imgur.com/dCdflKN.png" width="130" height="130" class="img-fluid mb-4 mr-3"/>
									<h3><strong>Your Cart is 	</strong></h3>
									<h4>Add something to make me happy :)</h4>
                                    <button type="button" class="btn btn-outline-dark" style={{marginTop:"10px"}} onClick={()=>navigate("/")}>Go To Shopping!</button>
								</div>
						</div>
				</div>
						
					
					</div>
				 
				 </div>
				
				</div>
    </div>
  )
}
