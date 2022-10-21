import React, { useEffect, useState } from 'react'
import './Footer.css'

export default function Footer() {
  const [loginData,setLoginData]=useState()

  useEffect(() => {
    const getLoginData=JSON.parse(localStorage.getItem("loginData"))
    setLoginData(getLoginData)
  }, [])
  
  return (
    <div>
     <footer>
  <div class="container-footer">
    <div class="content">
      ⁡⁢⁣⁣ ⁡
      <div class="col">
        <p>contact us</p>
        <p>
          E-commerce Web
        </p>
        <div class="flex">
          <div class="col-info">
            <p>
              PHONE NUMBER <br />
              <span>+1 (800) 060</span>
            </p>
            <p>
              OUR LOCATION <br />
              <span>Surat</span>
            </p>
          </div>
          <div class="col-info">
            <p>
              EMAIL ADDRESS <br />
              <span>us@example.com</span>
            </p>

            <p>
              WORKING HOURS <br />
              <span>Mon-sat 10:00pm - 7:00pm</span>
            </p>
          </div>
        </div>
      </div>
      ⁡⁢⁣⁡⁢⁣⁣ ⁡
      <div class="col">
        <div class="column">
          <p>information</p>
          <p>about us</p>
          <p>Contact-us</p>
        </div>
      </div>
      <div class="col">
        <div class="column">
          <p>my account</p>
          <p>store location</p>
          <p>order history</p>
          <p>wish list</p>
          <p>special offers</p>
          <p>gift certificates</p>
        </div>
      </div>
      ⁡⁢⁣⁣ ⁡
      <div class="col">
        <p>newsletter</p>
        <p>
          enter your email address below to subscribe to our newsletter<br />
          and keep up to date with discounts and special offers.
        </p>
        <div class="email">
          <input type="email" value={loginData?.email} />
          <button>Subscribe</button>
        </div>
        <p>follow us on social networks:</p>
        <div class="social">
          <img src="https://i.postimg.cc/44pPB9wk/facebook.png" alt="" />
          <img src="https://i.postimg.cc/L8Q3nB4f/twitter.png" alt="" />
          <img src="https://i.postimg.cc/TYG9S3Hy/instagram.png" alt="" />
          <img src="https://i.postimg.cc/kGCxkTwr/youtube.png" alt="" />
          <img src="https://i.postimg.cc/CKZHDBd2/telegram.png" alt="" />
        </div>
      </div>
      ⁡⁢⁡⁢⁣⁣
    </div>
  </div>
  <div class="content-foot">
    <div class="container-footer">
      <div class="foot-text">
        <p>powered by <span>E-commerce</span></p>
        <div class="pay">
          <img src="https://i.postimg.cc/PrtWyFPY/visa-logo-png-2013.png" alt="" />
          <img src="https://i.postimg.cc/R0j1TSHZ/mastercard-PNG23.png" alt="" />
          <img src="https://i.postimg.cc/sggJj0zs/paypal-logo-png-2119.png" alt="" />
          <img src="https://i.postimg.cc/hjdsFzBm/American-Express-logo-PNG14.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}
