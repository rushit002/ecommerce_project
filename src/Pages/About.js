import { Rating } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function About() {
  const [getData, setGetData] = useState()

  const apiGetData = () => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then(res => res.json())
      .then(json => setGetData(json))
  }
  useEffect(() => {
    apiGetData()
  }, [])

  console.log("getdata", getData)
  return (
    <div>
    </div>
  )
}
