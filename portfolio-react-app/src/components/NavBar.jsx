import React from 'react';
//import { Link } from 'react-router-dom';
import {Container, Navbar, Nav} from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar expand="lg" style={styles.navbar}className="navbar navbar-light">
      <Container id="container" className="d-flex justify-content-between align-items-center" style={styles.conty}>
        <Navbar.Brand href="#home">
          <img src="/nabar-brand2.png" alt="Portfolio" style={styles.brand} /><span style={styles.span}> JAMES BAMPTON - Develop & Design</span>
        </Navbar.Brand>
          <Navbar.Toggle style={styles.toggler} aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link href="#home">
              <img src="/web-but-sm2.png" alt="Portfolio" style={styles.icons} />
            </Nav.Link>
            <Nav.Link href="#home">
              <img src="/icons-but-sm2.png" alt="Portfolio" style={styles.icons} />
              </Nav.Link>
            <Nav.Link href="#home">
              <img src="/img-but-sm2.png" alt="Portfolio" style={styles.icons} />
              </Nav.Link>
            <Nav.Link href="#Link">
              <img src="/docs-but-sm2.png" alt="Portfolio" style={styles.icons} />
            </Nav.Link> 
            <Nav.Link href="#Link">
              <img src="/git-but-sm2.png" alt="Portfolio" style={styles.icons2} />
            </Nav.Link>           
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

// Inline styles for simplicity
const styles = {  
  navbar: {
    backgroundColor: '#333',
    color: '#000000',
    padding: '10px',
    
  },
  navfont:{
    paddingLeft: '20px',
    paddingRight: '20px',
    color: '#a05b2e',
  },
  icons: {
      width: '100px',
      height: '100px',
      transform: 'translateY(67px)',
      transition: 'transform 0.3s ease',
  },

   icons2: {
      width: '100px',
      height: '100px',
      transform: 'translateY(67px)',
      transition: 'transform 0.3s ease',
      marginBottom: '70px'
  },

  brand: {
      width: '70px',
      height: '70px',
  },
  toggler: {
    background:  '#a05b2e',
  },
  span: {
    color: '#a05b2e',
  },
  conty: {
    marginLeft : '26px',
  }
};

export default NavBar