import Card from "@mui/material/Card";
import { Container } from "@mui/system";
import React from "react";
const Superiority = () => {
  return (
    <Container className="superriority">
      <h1>Keunggulan Kami</h1>
      <p>
        A Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>

      <div className="card">
        <Card sx={{ borderRadius: "30px" }}>
          <div className="card-content">
            <img src="./assets/packing.svg" alt="" />
            <h3>Kirim Ke Berbagai Negara</h3>
            <p>
              A Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
          </div>
        </Card>
        <Card sx={{ borderRadius: "30px" }}>
          <div className="card-content">
            <img src="./assets/easy.svg" alt="" />
            <h3>Mudah Di Gunakan</h3>
            <p>
              A Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
          </div>
        </Card>
        <Card sx={{ borderRadius: "30px" }}>
          <div className="card-content">
            <img src="./assets/secure.svg" alt="" />
            <h3>Pengiriman Aman</h3>
            <p>
              A Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
          </div>
        </Card>
      </div>
    </Container>
  );
};

export default Superiority;
