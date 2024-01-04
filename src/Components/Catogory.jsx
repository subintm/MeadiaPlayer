import React,{useEffect, useState} from 'react'
import { Modal,Button,Form,FloatingLabel, Row, Col, Collapse } from 'react-bootstrap';
import { addCatogoryAPI, getAVideosAPI, getAllCatogoryAPI,removeCatogoryAPI, updateCatogoryAPI } from '../Services/allAPI';
import VideoCard from './VideoCard';






function Catogory(dropResponse) {
  const [allCatogories,setAllCatogories]=useState([])
  const[CatogoryName,setCatogoryName]=useState("")
  const [show, setShow] = useState(false);
 
  const [open, setOpen] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(()=>{
    getAllCatogories()
  },[dropResponse])

    const getAllCatogories=async()=>{
    const{data} =await getAllCatogoryAPI()
    setAllCatogories(data)
  }
  
  

  const handleAdd =async()=>{
    if(CatogoryName){
      const result =await addCatogoryAPI({CatogoryName, allVideos:[],})
      if(result.status>=200&&result.status<300){
        handleClose()
        setCatogoryName("")
       
      }else{
        alert(result.message)
      }
    }else{
      alert("complete the form")
    }
   }
  const removeCatogory=async(id)=>{
    await removeCatogoryAPI(id)
    getAllCatogories()
  }

const DragOver=(e)=>{
  console.log("video card dragging over the catogory");
  e.preventDefault()
}



const videoDrop= async(e,catogoryId)=>{
  const videoId =e.dataTransfer.getData("videoId")
  console.log("video Id:"+videoId+"dropped!!! inside the catogory:"+catogoryId)
  const {data} =await getAVideosAPI(videoId)
  
 console.log(data);
 const selectedCatogory =allCatogories.find(item=>item.id===catogoryId)
 selectedCatogory.allVideos.push(data)
 console.log(selectedCatogory);
 await updateCatogoryAPI(catogoryId,selectedCatogory)
 getAllCatogories()
 

  
}
const videoDragStarted=(e,videoId, catogoryId)=>{
  let dataShare={videoId,catogoryId}
  e.dataTransfer.setData("data",JSON.stringify(dataShare))
}


  return (
    <>
    <div className='d-grid'>
    <Button className='btn btn-info' onClick={handleShow}>
         Catogory
      </Button>
      </div>

        
        {
          allCatogories?.length>0?allCatogories.map(Catogory=>(
           <div className='border rounded p-3 mt-2' droppable="true" onDragOver={e=>DragOver(e) } onDrop={e=>videoDrop(e,Catogory?.id)}>
            <div   onClick={() => setOpen(!open)} className='d-flex justify-content-between align-items-center'>
              <h6>{Catogory?.CatogoryName}</h6>
              <button onClick={()=>removeCatogory(Catogory?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
            </div>
            <Collapse in={open}>
            <Row>
              {
                Catogory?.allVideos?.length>0?Catogory?.allVideos.map(card=>(
                  <Col draggable onDragStart={e=>videoDragStarted(e,card.id,Catogory.id)} className='mb-2' sm={12}>
                   <VideoCard video={card} insideCatogory={true}/>
                   </Col>
                 )):null
               }
              
            </Row>
            </Collapse>
           </div> 
      )): <p className='fw-bolder fs-5 text-warning mt-2'>No catogories are added</p>
    }

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false} centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Catogory From</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel className='mb-3' controlId="floatingInputCName" label="Catogory Name">
        <Form.Control type="Text" placeholder="Catogory Name" onChange={e=>setCatogoryName(e.target.value)} />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAdd} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Catogory