import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import Catogory from '../Components/Catogory'

function Hom() {
  const [uploadVideoResponse,setUploadVideoResponse]=useState({})

  const[dropResponse,setDropResponse]=useState({})
  return (
    <>
    <div className="container d-flex mt-5 justify-content-between">
      <div className="add-videos">
        <Add setUploadVideoResponse={setUploadVideoResponse}/>
      </div>
      <Link to={'/history'} style={{textDecoration:"none",color:"white",fontSize:"20px"}} >Watch History
      <i class="fa-solid fa-clock-rotate-left"></i>  
      </Link>
    </div>
    <div className="container-fluid w-100 mt-5 mb-5 row">

    <div className="All-videos col-lg-9">
      <h2>All Uploaded Videos</h2>
      <View uploadVideoResponse={uploadVideoResponse} setDropResponse={setDropResponse}/>
    </div>
    <div className="catogory col-lg-3">
      <Catogory dropResponse={dropResponse}/>
    </div>
    </div>
    </>
  )
}

export default Hom