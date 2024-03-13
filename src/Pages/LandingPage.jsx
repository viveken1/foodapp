import React from 'react'
import { useNavigate } from "react-router-dom";

function LandingPage() {

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/home");
  };

  return (
    <>
      <div>
        <div className='banner d-flex flex-column justify-content-center align-items-center'>
          <h1>WELCOME TO <span style={{color:"red"}}>MR.PANDA</span></h1>
          <h3  style={{color:"green"}}className='text-center'>WELCOME TO WORLD OF FOODS<br />ENJOY LIFE ENJOY FOODS  </h3>
          <button onClick={handleNavigate} className="btn btn-info">
              Get Started
            </button>
        </div>
      </div>
    </>
  )
}

export default LandingPage