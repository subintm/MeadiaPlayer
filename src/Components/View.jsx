import React, { useEffect, useState} from 'react'
import { Row, Col } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllCatogoryAPI, getAllVideosAPI, updateCatogoryAPI } from '../Services/allAPI'


function View({uploadVideoResponse,setDropResponse,}) {
  const [deleteVideoResponse,setDeleteVideoResponse] = useState(false)
  const [allVideos,setAllVideos] = useState([])
  useEffect(()=>{
    getAllUploadedVideos()
    setDeleteVideoResponse(false)
  },[uploadVideoResponse,deleteVideoResponse])

  const getAllUploadedVideos = async ()=>{
   const result = await getAllVideosAPI()
   if(result.status===200){
    console.log(result);
    setAllVideos(result.data)
   }else{
    console.log("API Failed");
    setAllVideos([])
   }
  }
  

  const dragOver=(e)=>{
    e.preventDefault()
  }

  const videoDropped=async(e)=>{
    const {videoId,catogoryId}=JSON.parse(e.dataTransfer.getData("data"))
  console.log(videoId,catogoryId); 
  const {data}=await getAllCatogoryAPI()
  const selectedCatogory= data.find(item=>item.id==catogoryId)
  let result=selectedCatogory.allVideos.filter(video=>video.id!==videoId)
  console.log(result);
  let{id,CatogoryName}=selectedCatogory
  let newCatogory={id,CatogoryName,allVideos:result}
  console.log(newCatogory);
  const res=await updateCatogoryAPI(catogoryId,newCatogory)
  setDropResponse(res)

  }
  return (
    <>
      <Row droppable="true"onDragOver={e=>dragOver(e)} onDrop={(e)=>videoDropped(e)}>
        {
          allVideos?.length>0?allVideos.map(video=>(
            <Col className='mb-4' sm={12} md={6} lg={4} x1={3}>
          <VideoCard setDeleteVideoResponse={setDeleteVideoResponse} video={video} />
        </Col>
          )):<p className='fs-3 text-warning fw-older'>No Videos are uploaded yet</p>
          
        }
      </Row>
    </>
  )
}

export default View