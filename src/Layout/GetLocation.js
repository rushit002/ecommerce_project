import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function GetLocation() {
    const [latitude,setLatitude]=useState('')
    const [longitude,setLongitude]=useState('')
    
    const API_endpoint=`https://api.openweathermap.org/data/2.5/weather?`
    const API_key=`0cd746d41030b96c00616d345a008186`

    useEffect(() => {
       navigator.geolocation.getCurrentPosition((position)=>{
         console.log("position",position.coords)
             setLatitude(position.coords.latitude)
         setLongitude(position.coords.longitude)
        })
        var  finalEndpoint=(`${API_endpoint}lat=${latitude}&lon=${longitude}&exclude=hourly,daily=${API_key}`)
        axios.get(finalEndpoint)
        .then((res)=>{
            console.log("data",res.data)
        })
    }, [latitude,longitude])
    
    return (
    <div>

    </div>
  )
}
