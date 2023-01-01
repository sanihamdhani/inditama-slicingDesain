import { Grid } from "@mui/material";
import React from "react";

const StatusDelivery = () => {
  return (
    <div className="status">
      <Grid container rowSpacing={1}>
        <Grid item sm={6} className="grid-status-left">
          <img
            src="./assets/background-kiri.svg"
            alt="elips"
            style={{ height: "300px" }}
          ></img>

          <img
            src="./assets/phone2.svg"
            alt="people"
            style={{
              height: "600px",
              marginTop: "-10rem",
              left: "-4%",
            }}
          ></img>
          <img
            src="./assets/ikan2.svg"
            alt="people"
            style={{
              height: "250px",
              left: "27%",
              marginTop: "3rem",
            }}
          ></img>
        </Grid>
        <Grid
          item
          sm={6}
          data-aos="fade-up"
          data-aos-duration="1500"
          className="grid-status-right"
        >
          <h1>Lacak Status Pengiriman Anda</h1>
          <p style={{ marginTop: "30px" }}>
            A Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown. A Lorem Ipsum is simply dummy
            text of the printing and typesetting industry.
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default StatusDelivery;
