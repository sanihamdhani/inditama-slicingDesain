import { Container, Grid } from "@mui/material";
import React from "react";

const MetodeDelivery = () => {
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
          <h1>Berbagai Metode Pengiriman</h1>
          <p style={{ marginTop: "30px" }}>
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
            src="./assets/ikan1.svg"
            alt="people"
            style={{
              height: "250px",
              right: "27%",
              marginTop: "3rem",
              //   top: "2000px",
            }}
          ></img>
          <img
            src="./assets/phone1.svg"
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

export default MetodeDelivery;
