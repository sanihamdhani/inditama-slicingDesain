import { Container, Grid } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <Container className="hero">
      <Grid container rowSpacing={1}>
        <Grid
          item
          xs={12}
          md={3}
          lg={6}
          sm={6}
          data-aos="fade-up"
          data-aos-duration="1500"
          className="grid-right"
        >
          <h1>Kirim berbagi jenis ikan dengan mudah</h1>
          <p style={{ marginTop: "30px" }}>
            A Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
          <div className="btn">
            <button>
              <img src="./assets/playstore-logo.svg" alt="playstore" />
              <p>
                GET IN ON <h3>Google Play</h3>
              </p>
            </button>
            <button>
              <img src="./assets/appstore.svg" alt="" />
              <p>
                Download on the <h3>App Store</h3>
              </p>
            </button>
          </div>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            className="user"
          >
            <Grid item xs={3}>
              <h2 style={{ fontSize: "40px" }}>1.9k+</h2>
              <p>Active Users</p>
            </Grid>
            <Grid item xs={4}>
              <h2 style={{ fontSize: "40px" }}>20+</h2>
              <p>New Features</p>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sm={6} className="grid-left">
          <img
            src="./assets/background-kanan.svg"
            alt="elips"
            style={{ height: "300px" }}
          ></img>

          <img
            src="./assets/ikan.svg"
            alt="people"
            style={{ height: "300px", right: "28%" }}
          ></img>
          <img
            src="./assets/phone.svg"
            alt="people"
            style={{ height: "700px", top: "1%" }}
          ></img>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
