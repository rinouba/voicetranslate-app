import React from 'react'
import "./Footer.css"
function Footer() {

  
  return (
    <div>
      <div className='logout d-flex justify-content-between'>
      <div class="bi bi-escape mx-4 mt-1 fs-5 logout-icon"></div>
        <div className='me-5 fs-5'>Logout</div>
      </div>
      <div className="row row-footer">

        <div className="col">
          <a href="#">
              <div className='card-bottem'>
                <div className='mt-3'>
              <i class="bi bi-lamp fs-1 color2 card-bottem-i"></i>
              <div>Wake up</div>
                </div>
              </div>
            </a>
        </div>
        <div className="col">
          <a href="#">
        <div className='card-bottem'>
                <div className='mt-3'>
                <i class="bi bi-moon-stars fs-1 color2 card-bottem-i"></i>
        <div>Good night</div>
                </div>
              </div>
          </a>
        </div>

        <div className="col">
        <a href="#">
              <div className='card-bottem'>
                <div className='mt-3'>
                <i class="bi bi-door-closed fs-1 color2 card-bottem-i"></i>
              <div>Leave home</div>
                </div>
              </div>
              </a>
        </div>

        <div className="col">
        <a href="#">
        <div className='card-bottem'>
                <div className='mt-3'>
                <i class="bi bi-door-open fs-1 color2 card-bottem-i"></i>
              <div>Back home</div>
                </div>
              </div>
              </a>
        </div>

      </div>
    </div>
  )
}

export default Footer