import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import './navbar.css'
import logo from '../../assets/images/logo.png'
import profile from '../../assets/images/profile.jpg'
function Headbar() {
  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container fluid>
          <Navbar.Brand href='#home' className='header'>
            <img
              alt='hellother'
              src={logo}
              width='30'
              height='30'
              className='d-inline-block align-top logo-img'
            />
            matchM
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'></Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Headbar

const Profile = () => (
  <>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <img
        src={profile}
        style={{ width: '60px', borderRadius: '50%', marginRight: '10px' }}
      />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p style={{ color: 'white', fontWeight: '700', margin: '0' }}>Name</p>
        <p style={{ color: 'white', fontSize: '20px', margin: '0' }}>500 E</p>
      </div>
    </div>
  </>
)
