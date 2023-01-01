import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import React from "react";
const HeaderComponent = () => {
  return (
    <AppBar
      position="static"
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <Container
        className="navbar"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <h1>Toko Ikan</h1>
        <ul>
          <li style={{ color: "#F2572E" }}>Beranda</li>
          <li>Keunggulan</li>
          <li>Fitur Aplikasi</li>
          <li>Testimonial</li>
        </ul>
        <button>Download</button>
      </Container>
    </AppBar>
  );
};

export default HeaderComponent;
