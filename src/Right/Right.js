import React from 'react'
import "./Right.css"
import imgwifi from "../Imgs/pic3.png"
import imglamp from "../Imgs/pic4.png"
function Right() {
  return (
    <div className='bigup-contianer'>
        <div>
            <div className='fw-bold pb-3'>SHORTCUTS</div>
            <div className='d-flex justify-content-between'>
                <div className='d-flex justify-content-between'> 
                        <div className='background-wifi '>
                            <img src={imgwifi} alt="" />
                        </div>
                        <div className='mt-2 mx-2'>
                            <div className='fw-bold'>WI-FI</div>
                            <div className='text-muted'>150/20</div>
                        </div>
                </div>

                <div>
                
                <label class="label mt-3 me-3">
                <div class="toggle">
                <input class="toggle-state" type="checkbox" name="check" value="check" />
                <div class="indicator"></div>
                </div>
                </label>



                </div>
            </div> 

            <div className='d-flex justify-content-between mt-2'>
                <div className='d-flex justify-content-between'> 
                        <div className='background-wifis '>
                            <img src={imglamp} alt="" />
                        </div>
                        <div className='mt-2 mx-2'>
                            <div className='fw-bold'>Indoor Light</div>
                            <div className='text-muted'>8</div>
                        </div>
                </div>

                <div>
                
                <label class="label mt-3 me-3">
                <div class="toggle">
                <input class="toggle-state" type="checkbox" name="check" value="check" />
                <div class="indicator"></div>
                </div>
                </label>

                </div>
            </div> 

            <div className='fw-bold pb-3 mt-3'>DEVICES</div>

            <div className='card-right d-flex justify-content-between text-center'>
                <div className='text-white'>
                    <div class="bi bi-cup-hot fs-1"></div>
                    <div className='mx-4'>Coffee maker</div>
                </div>
                <label class="label mt-3 me-3">
                <div class="toggle">
                <input class="toggle-state" type="checkbox" name="check" value="check" />
                <div class="indicator"></div>
                </div>
                </label>
            </div>

            <div className='card-right d-flex justify-content-between text-center mt-3'>
                <div className='text-white'>
                <i class="bi bi-train-lightrail-front fs-1"></i> 
                    <div className='mx-4'>Refrigerator</div>
                </div>
                <label class="label mt-3 me-3">
                <div class="toggle">
                <input class="toggle-state" type="checkbox" name="check" value="check" />
                <div class="indicator"></div>
                </div>
                </label>
            </div>

            <div className='card-rights d-flex justify-content-between text-center mt-3'>
                <div className='text-white'>
                <i class="bi bi-display fs-1 color2"></i>
                    <div className='mx-4 text-dark'>SmartTV</div>
                </div>
                <label class="label mt-3 me-3">
                <div class="toggle">
                <input class="toggle-state" type="checkbox" name="check" value="check" />
                <div class="indicator"></div>
                </div>
                </label>
            </div>

            <div className='card-rights d-flex justify-content-between text-center mt-3'>
                <div className='text-white mx-3'>
                <i class="bi bi-fan fs-1 color2"></i>
                    <div className='mx-4 text-dark'>Fan</div>
                </div>
                <label class="label mt-3 me-3">
                <div class="toggle">
                <input class="toggle-state" type="checkbox" name="check" value="check" />
                <div class="indicator"></div>
                </div>
                </label>
            </div>
        </div>
    </div>
  )
}

export default Right