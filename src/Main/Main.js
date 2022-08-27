import React from 'react'
import "./Main.css"
import imgmain from "../Imgs/pic1.png"
import imgmain2 from "../Imgs/pic2.png"
function Main() {
  return (
    <>
    <div className='Search-div'>
    <i class="bi bi-search icon" ></i>
    <input type="search" value="Search" className='Search-div-input'/>
    </div>
    <div className='display-5 mx-5 mt-2'>Hello,John!</div>
    <div className='mx-5 mt-3 fw-bold'>Room temperature</div>
    <div className="row row-main">
      <div className="col row-main-left">-</div>
      <div className="col-6">
      <img src={imgmain} className="picimgmain" />
      </div>
      <div className="col row-main-right">+</div>
    </div>
    
    {/*  */}

    <div className="row row-main-bottem">
      <div className="col">
        <div className='colz '><div className='inside'></div></div>
        <div className='text-muted'>Mon</div>
      </div>
      <div className="col">
      <div className='colz '><div className='insides'></div></div>
        <div className='text-muted'>Tue</div>
      </div>
      <div className="col">
      <div className='colz '><div className='inside'></div></div>
        <div className='text-muted'>Mon</div>
      </div>
      <div className="col">
      <div className='colz '><div className='insides'></div></div>
        <div className='text-muted'>Wed</div>
      </div>
      <div className="col">
      <div className='colz '><div className='inside'></div></div>
        <div className='text-muted'>Thu</div>
      </div>
      <div className="col">
      <div className='colz '><div className='insides'></div></div>
        <div className='text-muted'>Fri</div>
      </div>
    </div>

    {/*  */}

    <img src={imgmain2} className="imgmain2" />

    {/*  */}

    <dir className="card-div">
    <div className='card-left'>
    <i class="bi bi-snow fs-1 color1"></i>
      <div>Cool</div>
    </div>
    <div className='card-left'>
    <i class="bi bi-lightbulb fs-1 color1"></i>
    <div>Heat</div>
    </div>
    <div className='card-left bg-color1 text-white'>
    <i class="bi bi-info-lg fs-1"></i>
    <div>Auto</div>
    </div>
    </dir>
    </>
  )
}

export default Main