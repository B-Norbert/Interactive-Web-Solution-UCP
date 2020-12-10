import React, { useState, useEffect, useRef } from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import '../App.css';

function Navbars() {

  const [navBackground, setNavBackground] = useState(false)
  const navRef = useRef()
  navRef.current = navBackground
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50
      if (navRef.current !== show) {
        setNavBackground(show)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const [show, setShow] = useState(false);
  const showDropdown = (e)=>{
      setShow(!show);
  }
  const hideDropdown = e => {
      setShow(false);
  }

    return(
<Navbar variant="dark" expand="sm" fixed="top" style={{ transition: '1s ease',backgroundColor: navBackground ? 'teal' : 'transparent'}}>
  <Navbar.Brand href="/"><img src="../images/ucp-white-logo.png" alt="" width="200" height="45"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/contact">Contact</Nav.Link>
      <Nav.Link href="/Courses">Courses</Nav.Link>
      <Nav.Link href="/Quiz">Quiz</Nav.Link>
      <NavDropdown  title="Fees" id="collasible-nav-dropdown"
         show={show}
         onMouseEnter={showDropdown} 
         onMouseLeave={hideDropdown}
      >
        <NavDropdown.Item href="/Fees">Fees and Finances</NavDropdown.Item>
        <NavDropdown.Item href="/Bursaries">Bursaries</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default Navbars;