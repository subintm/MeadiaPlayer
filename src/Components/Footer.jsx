import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (<>
    <div className='d-flex justify-content-between  mt-5 ms-5'>
    <div className="d-flex-column justify-content">
    <h2> <i style={{height:50, marginBottom:-10,marginTop:30}}   className="fa-solid fa-cloud-arrow-up ms-2"></i> Media Player</h2>
     <div className="d-flex">
      Designed and build with all the love in the <br />
      world by the Bootstrap team with the <br />help of our contributors. <br />Cpde licenced by MIT,docs CC BY 3.0. <br />
      currently v5.3.2.
    </div>
    </div>


    <div className='d-flex-column justify-content-between  mt-5'>
      <h2>Links</h2>
      <div className="d-flex-column">
      <Link to={'/'} style={{textDecoration:'none',color:'white'}}href="">Landing page</Link><br />
      <Link to={'/home'} style={{textDecoration:'none',color:'white'}}href="">Home</Link> <br />
      <Link to={'/history'} style={{textDecoration:'none',color:'white'}}href="">Watch history</Link><br />
      </div>
    </div>


    <div className='d-flex-column justify-content-between mt-5'>
      <h2>Guides</h2>
      <div className="d-flex-column">
      <a style={{textDecoration:'none',color:'white'}}href="">Bootstrap</a><br />
      <a style={{textDecoration:'none',color:'white'}}href="">React</a> <br />
      <a style={{textDecoration:'none',color:'white'}}href="">Routing</a><br />
      </div>
    </div>
    <div>

    <div className='d-flex-column justify-content-between me-5 mt-5'>
      <h2>Contacts</h2>
      <div className="d-flex-column">
     <input placeholder='Enter your mail' type="text" />
     <button className='bg-info ms-2 border-'><i class="fa-solid fa-arrow-right ms-2 me-2"></i></button>
     <br />
     <div className='d-flex-column justify-content-between' style={{fontSize:"29px",}}>
     <i class="fa-brands fa-facebook fa-2px" style={{marginLeft:'15px',color:'white'}}></i> 
     <i class="fa-brands fa-twitter" style={{marginLeft:'15px' ,color:'white'}}></i>
     <i class="fa-brands fa-instagram" style={{marginLeft:'15px' ,color:'white'}}></i>
     <i class="fa-brands fa-github" style={{marginLeft:'15px',color:'white'}}></i>
     <i class="fa-brands fa-linkedin" style={{marginLeft:'15px',color:'white'}}></i>
     <i class="fa-regular fa-envelope" style={{marginLeft:'15px',color:'white'}}></i>
     </div>
      </div>
    </div>
      
    </div>
    
    </div>

    
    </>

  )
}

export default Footer