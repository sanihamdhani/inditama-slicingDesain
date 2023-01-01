import React from "react";
import { Container, Grid } from "@mui/material";

const SchduleDelivery = () => {
  return (
    <Container className="metode">
      <Grid container rowSpacing={1}>
        <Grid
          item
          sm={6}
          data-aos="fade-up"
          data-aos-duration="1500"
          className="grid-metode-left"
        >
          <h1>Cek Schedule Pengiriman Anda</h1>
          <p
            style={{
              marginTop: "30px",
              fontSize: "15px",
              lineHeight: "2rem",
              overflowX: "hidden",
            }}
          >
            A Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
        </Grid>

        <Grid item sm={6} className="grid-metode-right">
          <img
            src="./assets/background-kanan1.svg"
            alt="elips"
            style={{ height: "300px" }}
          ></img>

          <img
            src="./assets/ikan3.svg"
            alt="people"
            style={{
              height: "250px",
              right: "27%",
              marginTop: "3rem",
            }}
          ></img>
          <img
            src="./assets/phone3.svg"
            alt="people"
            style={{
              height: "600px",
              marginTop: "-12rem",
              right: "-3%",
            }}
          ></img>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SchduleDelivery;
