import "../assets/css/nav-bar.css";

// import React from "react";
import { MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          
            <h5 className="title">Welcome to the Pizza Express</h5>
            <p>
                 Pizza makes anything possible.. 
            </p>
         
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:  Pizzaexpress.com
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;