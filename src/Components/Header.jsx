import React from 'react'
import  images from '../Images/logo.jpg'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
        <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div class="container">
          <a class="navbar-brand" href="#">
            <div className='d-flex justify-content-center align-items-center'>
                <img src={images} alt="" width={"40px"}/>
                <h5 className='ps-2 fw-bolder'>MR.PANDA</h5>
            </div>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav ms-auto">
            <li>
              <Link className='me-3 hmh fw-bolder' to="/">Home</Link>
            </li>
            <li>
              <Link className='me-3 hmh fw-bolder' to="/home">All Recipe</Link>
            </li>
            <li>
              <Link className='hmh fw-bolder' to="/history">History</Link>
            </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header