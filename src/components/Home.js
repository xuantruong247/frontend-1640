import React from 'react'
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export default function Home() {
  return (
    <>
      <div className='container mt2'>
        <h1 className='text-center mt2'>Image Upload Projects With Mysql database</h1>

        <div className='text-end'>
          <Button variant="primary" >
            <NavLink to="/dealine" className='text-decoration-none text-light'>
              Add Deline
            </NavLink>
          </Button>
        </div>


        {/* Card*/}
        <div className='d-flex justify-content-between align-iteams-center mt-5'>
          <NavLink to='/dealine' className='text-decoration-none '>
            <Card style={{ width: '22rem', height: "18rem" }}>
              <Card.Img variant="top" src="//cms.greenwich.edu.vn/pluginfile.php/1/theme_adaptable/frontpagerendererdefaultimage/1671766848/edu-survey-landing-image.jpg" style={{ width: "330px", height: "100vh", textAlign: "center", margin: "auto" }} className="mt-2" />
              <Card.Body className='text-center'>
                <Card.Title >Card Title</Card.Title>
              </Card.Body>
            </Card>
          </NavLink>

          <NavLink to='/dealine' className='text-decoration-none '>
            <Card style={{ width: '22rem', height: "18rem" }}>
              <Card.Img variant="top" src="//cms.greenwich.edu.vn/pluginfile.php/1/theme_adaptable/frontpagerendererdefaultimage/1671766848/edu-survey-landing-image.jpg" style={{ width: "330px", height: "100vh", textAlign: "center", margin: "auto" }} className="mt-2" />
              <Card.Body className='text-center'>
                <Card.Title >Card Title</Card.Title>
              </Card.Body>
            </Card>
          </NavLink>

          <NavLink to='/dealine' className='text-decoration-none '>
            <Card style={{ width: '22rem', height: "18rem" }}>
              <Card.Img variant="top" src="//cms.greenwich.edu.vn/pluginfile.php/1/theme_adaptable/frontpagerendererdefaultimage/1671766848/edu-survey-landing-image.jpg" style={{ width: "330px", height: "100vh", textAlign: "center", margin: "auto" }} className="mt-2" />
              <Card.Body className='text-center'>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </NavLink>

        </div>
      </div>
    </>
  )
}
