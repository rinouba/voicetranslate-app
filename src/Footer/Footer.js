import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <div>
      <div className='logout d-flex justify-content-between'>
      <div class="bi bi-escape mx-4 fs-5"></div>
        <div className='me-4 fs-5'>Logout</div>
      </div>
      <div className="row row-footer">
        
        <div className="col">
              <div className='card-bottem'>
                <div className='mt-3'>
              <i class="bi bi-lamp fs-1 color2"></i>
              <div>Wake up</div>
                </div>
              </div>
        </div>

        <div className="col">
        <div className='card-bottem'>
                <div className='mt-3'>
                <i class="bi bi-moon-stars fs-1 color2"></i>
        <div>Good night</div>
                </div>
              </div>
        </div>

        <div className="col">
        <div className='card-bottem'>
                <div className='mt-3'>
                <i class="bi bi-door-closed fs-1 color2"></i>
              <div>Leave home</div>
                </div>
              </div>
        </div>

        <div className="col">
        <div className='card-bottem'>
                <div className='mt-3'>
                <i class="bi bi-door-open fs-1 color2"></i>
              <div>Back home</div>
                </div>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Footer