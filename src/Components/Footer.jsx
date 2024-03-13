import React from "react";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <>
      <div>
      <div style={{height:'310px'}} className='container mt-5 w-100'>
      <div className='footer-content d-flex justify-content-between'>
        <div className='media' style={{width:'400px'}}>
          <div className='d-flex align-items-center'>
            <img src={"https://c8.alamy.com/comp/FXRWNP/cook-chef-vector-logo-restaurant-cafe-or-dish-meal-food-icon-FXRWNP.jpg"} alt="" width={"40px"}/>
            <h5 className='ps-2 fw-bolder'>MR.PANDA</h5>
          </div>
          <p style={{textAlign:'justify'}} className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cumque qui deserunt totam dolor! Aspernatur placeat, animi numquam reiciendis</p> 
          <p>Code licenced MIT, docs CC BY 3.0</p>
          <p>Currently v5.3.2</p>
        </div>
        <div className='links d-flex flex-column'>
          <h5>Links</h5>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
          <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home</Link>
        </div>

        <div className='guides d-flex flex-column'>
          <h5>Guides</h5>
          <a href="https://react.dev/" style={{textDecoration:'none',color:'white'}} target='_blank'>React JS</a>
          <a href="https://reactrouter.com/en/main" style={{textDecoration:'none',color:'white'}} target='_blank'>React Routing</a>
          <a href="https://react-bootstrap.netlify.app/" style={{textDecoration:'none',color:'white'}} target='_blank'>React Bootstrap</a>
        </div>

        <div className='contact d-flex flex-column'>
          <h5>Contact Us</h5>
          <div className="d-flex">
            <input type="text" className='form-control me-1' placeholder='Email id Please'/>
            <button className='btn btn-info'><i className='fa-solid fa-arrow-right'></i></button>
          </div>
          <div className="d-flex justify-content-between pt-3">
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-github"></i>
          </div>
        </div>
      </div>
      <p className='text-center mt-5'>Copyright &copy; 2024 MR PANDA Built with React.</p>
    </div>
      </div>
    </>
  );
}

export default Footer;