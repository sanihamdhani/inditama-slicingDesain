import { Container, Grid } from "@mui/material";
import React from "react";

const Track = () => {
  return (
    <div className="track">
      <Container>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          className="user"
        >
          <Grid item xs={6}>
            <h1>Lacak Pengiriman Anda</h1>
            <p></p>
            <p>
              A Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>

            <div className="track-delivery">
              <input type="text" placeholder="Lacak Pengiriman" />
              <button>Lacak</button>
            </div>
          </Grid>
          <Grid item xs={6} className="grid-right">
            <h1>Cek Tarif Pengirman Anda</h1>
            <div className="check-price">
              <input type="text" placeholder="Origin" />
              <input type="text" placeholder="Destination" />
            </div>
            <button>Ceck</button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Track;
