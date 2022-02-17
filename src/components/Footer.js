import React from "react";
import logo from "./img/logo-removebg-preview.png";
import instagram from "./img/instagram.png";
import linkedin from "./img/linkedin.png";

import {Rodape, ImgRedes, Container, ImgLogo } from "./Footer.style"



function Footer() {
    return (
      <Rodape>
        <ImgLogo src={logo} />
        <Container>
          <ImgRedes src={instagram} />
          <ImgRedes src={linkedin} />
        </Container>
      </Rodape>
    );
  }
  
  export default Footer;