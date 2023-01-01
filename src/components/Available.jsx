import { Container, Grid } from "@mui/material";
import React from "react";

const Available = () => {
  return (
    <div className="available">
      <Container>
        <Grid container rowSpacing={1}>
          <Grid
            item
            sm={6}
            data-aos="fade-up"
            data-aos-duration="1500"
            className="grid-available-left"
          >
            <h1>Available and Download Anytime!</h1>
            <p style={{ marginTop: "30px" }}>
              A Lorem Ipsum is simply dummy text of the printing and
            </p>

            <div className="btn-available">
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
          </Grid>

          <Grid item sm={6} className="grid-available-right">
            <img
              src="./assets/man.svg"
              alt="elips"
              // style={{ height: "300px" }}
            ></img>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Available;
