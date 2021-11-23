import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link  } from 'react-router-dom';
import useAuth from '../Hooks/useAuth'

const NavigationBar = () => {
    const {user,logOut}=useAuth()
    
    return (
        
          <Navbar className="sticky-button" style={{backgroundColor: 'Azure'  }} expand="lg">
  <Container>
     <img style={{width: '120px'}} src="https://i.ibb.co/sKPDp3L/Motorcycle-Racing-Logos-removebg-preview.png" alt=""/>
    <Navbar.Toggle aria-controls="basic-navbar-nav" /> 

   
   <Navbar.Collapse  id="basic-navbar-nav " className="flex-grow-0" >
      <Nav className=" d-flex  align-items-center ">
       <div className="d-flex ">
       {user.displayName? <h6>Hey {user.displayName}</h6>: ""}
      <Link className="mx-2 text-black text-decoration-none" to="/home"><h6>Home</h6></Link>
        <Link className="mx-2 text-black text-decoration-none" to="/dashboard"><h6>Dashboard</h6></Link>
       </div>
       <div className="d-flex">
       {user?.email ? <Link to='/'> <Button variant="info" className="fw-bolder" onClick={logOut}>logout</Button></Link>: 
         <Link  className="mx-2 text-black text-decoration-none" to="/login"><h6>login</h6></Link>}
       </div>
        
       
      </Nav>
    </Navbar.Collapse>
   
    
  </Container>
  
</Navbar>
           
       
    );
};

export default NavigationBar;