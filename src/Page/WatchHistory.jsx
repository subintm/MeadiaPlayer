import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { getHistoryAPI, removeHistoryAPI } from '../Services/allAPI'
import { Link } from 'react-router-dom'


function WatchHistory() {

  const[history,setHistory]=useState([])
  useEffect(()=>{
    getHistory()

  },[])
  const getHistory=async()=>{
    const result=await getHistoryAPI()
    if(result.status==200){
      setHistory(result.data)
    }else{
      console.log("API Failed");
      console.log(result.message);
    }

  }
 const removeHistoryItem=async(id)=>{
  await removeHistoryAPI(id)
  getHistory()
 }
  
  return (
    <>


    <div style={{margin:'20px'}} className='d-flex justify-content-between'>
    <h3>Watch History</h3>
    <Link to={'/'}style={{textDecoration:'none',color:'white',}} ><i class="fa-solid fa-arrow-left"></i> Bcak To Home</Link>
  
    </div>
    <div style={{margin:'40px'}}>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Time Stamp</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       {history?.length>0?history?.map((video,index)=>(
       <tr>
          <td>{index+1}</td>
          <td>{video?.caption}</td>
          <td> <a href={video?.link} >{video?.link}</a></td>
          <td>{video?.timeStamp} </td>
          <td><button onClick={()=>removeHistoryItem(video?.id)} className='btn'> <i className='fa-solid fa-trash text-danger'></i></button></td>
        </tr>
         )):
         <p className='text-danger '>Your WatchHistory is Empty</p>
        }
      </tbody>
    </Table>
    </div>
    </>
  )
}

export default WatchHistory