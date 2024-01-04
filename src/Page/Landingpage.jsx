import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <>
      <div className="container">
        <div className="row align-items-center m-5">
          <div className="col-lg-6">
            <h3> Welcome to <span className='text-warning'>Media Player</span></h3>
            <p style={{color:'white'}} className='mt-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat quibusdam itaque, minus eligendi alias non voluptates esse expedita quidem nemo ipsum similique? Dolores velit vitae saepe, deserunt reprehenderit earum.</p>
            <br />
            <Link to={'/home'} className='btn btn-info border border-radius-rounded'> Get staterd</Link> 
          </div>
          <div className="col-lg-1">
          </div>
          <div className="col-lg-5 mb-5">
            <img  src="https://media1.tenor.com/images/e60ef362952464cffaac46b2e3b485d1/tenor.gif?itemid=11112931" alt=""  />

          </div>
        </div>

      </div>
      <div className='mt-5'>
        <h2 className='text-center text-bold mt-5'>Features</h2>
      <div className="d-flex justify-content-between ms-5 me-5 mt-5">
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://c.tenor.com/YoFLcGT38dYAAAAC/dj-mix.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
        caption
        </Card.Text>
      </Card.Body>
    </Card>
     
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/68/d5/57/68d557d934f716d62afdb35b4669635a.gif" />
      <Card.Body>
        <Card.Title>Categorise Video</Card.Title>
        <Card.Text>
        caption
        </Card.Text>
      </Card.Body>
    </Card>

      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://media1.tenor.com/images/018d7b37b92de9de39a83b671b2e3564/tenor.gif?itemid=11755946 " />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
        caption
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    <div className='container border border-radius mt-5'>
      <div className='row align-items-center  m-5'> 
      <div className="col-lg-6">
        <h3 style={{color:'orange'}}> Simple,Fast and poweurful  </h3>
        <h4 >Play Everything :</h4>
         <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, nemo alias ipsa amet doloribus unde voluptas nulla vel assumenda dolor</p>
         <h4>Categorise Video :</h4>
         <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, nemo alias ipsa amet doloribus unde voluptas nulla vel assumenda dolor</p>
         <h4>Watch History :</h4>
         <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, nemo alias ipsa amet doloribus unde voluptas nulla vel assumenda dolor</p>
        </div>
        <div className="col-lg-6">
          <div className='justify-content'>
          <iframe style={{width:'550px',height:'290px'}} src="https://www.youtube.com/embed/IqwIOlhfCak" title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" 
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
          </div>
        </div>
    </div>
      </div> 
</div>
    </>
  )
}

export default LandingPage