import { Container } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Container>
      <div className="footer">
        <div className="main-footer">
          <img src="./assets/jbg.svg" alt="" />
          <p>A Lorem Ipsum is simply dummy text of the printing</p>
          <p>and typesetting industry. Lorem Ipsum has been the</p>
          <p>industry's standard.</p>
          <div className="sosmed">
            <img src="./assets/fb.svg" alt="" />
            <img src="./assets/twitter.svg" alt="" />
            <img src="./assets/ig.svg" alt="" />
          </div>
        </div>

        <div className="menu-footer">
          <h3>Menu Bantuan</h3>
          <p>Keunggulan</p>
          <p>Fitur Aplikasi</p>
          <p>Testimoni</p>
        </div>
        <div class="contact-footer">
          <h3>Informasi Kontak</h3>
          <p>0812-9797-1227</p>
          <p>0812-9797-1227</p>
          <p>Jbgtranshiping@gmail.com</p>
        </div>
      </div>
      <p
        style={{
          textAlign: "center",
          color: "#807D7D",
          fontSize: "20px",
          padding: "10px",
        }}
      >
        All rights reserved@2022
      </p>
    </Container>
  );
};

export default Footer;
