import React from 'react'
import './Head.css'

export default function Head() {
  return (
    <div>
        <header>
<div class="topnav" id="myTopnav">
<a class="logo">LEVIOOSA<em>.COM</em></a>
<a ><i class="fa fa-search"></i></a>
<a href="#"><i class="fa fa-user"></i></a>
<a href="#"><i class="fa fa-shopping-cart"></i></a>
<a href="#">Grocery Menu</a>
<div class="dropdown"><button class="dropbtn">Boxes <i class="fa fa-caret-down"></i></button>
<div class="dropdown-content">
<a href="#">Select Box</a>
<a href="#">Create Box</a>
<a href="#">Finalize Box</a>
</div>
</div> 
<a href="#">Contact</a>
<a href="#">About</a>
<a href="#" class="">Home</a>
<a href=""  class="icon" >&#9776;</a>
</div>
</header><div id="navbar">
<div class="slide-menu">
<a class="logo">JAWARIBOX<em>.COM</em></a>
<a ><i class="fa fa-search"></i></a>
<a href="#"><i class="fa fa-user"></i></a>
<a href="#"><i class="fa fa-shopping-cart"></i></a>
<a href="#">Grocery Menu</a>
<div class="dropdown"><button class="dropbtn">Boxes <i class="fa fa-caret-down"></i></button>
<div class="dropdown-content">
<a href="#">Select Box</a>
<a href="#">Create Box</a>
<a href="#">Finalize Box</a>
</div>
</div> 
<a href="#">Contact</a>
<a href="#">About</a>
<a href="#" class="active">Home</a>
</div>
</div>

    </div>
  )
}
