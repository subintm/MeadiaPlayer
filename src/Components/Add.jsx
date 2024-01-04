import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { uploadNewVideoAPI } from '../Services/allAPI';

function Add({setUploadVideoResponse}) {
  const [uploadVideo, setUploadVideo] = useState({
    id: "", caption: "", url: "", link: ""
  })

  const [show, setShow] = useState(false)

  console.log(uploadVideo);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getYoutubeEmbedLink = (e) => {
    const { value } = e.target
    if (value.includes("v=")) {
      let vID = value.split("v=")[1].slice(0, 11)
      console.log(` https://www.youtube.com/embed/${vID}`);
      setUploadVideo({ ...uploadVideo, link: `https://www.youtube.com/embed/${vID}` })
    } else {
      setUploadVideo({ ...uploadVideo, link: "" })
    }
  }
  const handleUpload = async () => {
    const { id, caption, url, link } = uploadVideo
    if (!id || !caption || !url || !link) {
      alert("complete the form")
    } else {
      const result = await uploadNewVideoAPI(uploadVideo)
      // console.log(result); ////////////////////////////////////////////
      //store uploade video in json server

      if(result.status>=200 && result.status<300){
        //success
        handleClose()
        //reset upload video
        setUploadVideo({
          id: "", caption: "", url: "", link: ""

        })
        //share result.data to view component
        setUploadVideoResponse(result.data)
      }else{
        alert(result.message)
      }
    }
  }

  return (
    <>

      <div className="d-flex align-items-center">
        <h5>Upload New Video</h5>
        <button onClick={handleShow} style={{ color: 'white' }} className='btn'><i style={{ height: '40px' }} class="fa-solid fa-upload fa-2x"></i>
        </button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload a New Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <FloatingLabel controlId="floating input ID" label=" Uploading Video ID">
            <Form.Control type="text" placeholder=" uploding video ID" onChange={e => setUploadVideo({ ...uploadVideo, id: e.target.value })} />
          </FloatingLabel><br />


          <FloatingLabel controlId="floatingInputCaption" label=" Uploading Video Caption">
            <Form.Control type="text" placeholder="Text" onChange={e => setUploadVideo({ ...uploadVideo, caption: e.target.value })} />
          </FloatingLabel><br />

          <FloatingLabel controlId="floatingInputUrl" label="Uploading Video Image URL">
            <Form.Control type="URL" placeholder="URL" onChange={e => setUploadVideo({ ...uploadVideo, url: e.target.value })} />
          </FloatingLabel><br />

          <FloatingLabel controlId="floatingInputLink" label="Uploading Video Youtoub Link">
            <Form.Control type="Link" placeholder="Link" onChange={getYoutubeEmbedLink} />
          </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} className='btn btn-info'>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add