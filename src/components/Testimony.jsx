import React from "react";
import { Card } from "@mui/material";
import Slider from "react-slick";
const Testimony = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="testimony">
      <h1>Testimonial</h1>
      <p>
        A Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text{" "}
      </p>

      <div className="card">
        <Slider
          {...settings}
          style={{
            marginTop: "3rem",
            padding: "1rem",
            overflowY: "none",
          }}
        >
          <div>
            <Card sx={{ borderRadius: "30px", width: "410.67px" }}>
              <div className="card-conten">
                <div className="img-content">
                  <img src="./assets/floyd.svg" alt="" />
                  <img src="./assets/start.svg" alt="" />
                </div>
                <h3>Floyd Miles</h3>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet. Amet minim
                  mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                  Velit officia consequat duis enim velit mollit. Exercitation
                  veniam consequat sunt nostrud amet.
                </p>
              </div>
            </Card>
          </div>
          <div>
            <Card
              sx={{ borderRadius: "30px", width: "410.67px", height: "320px" }}
            >
              <div className="card-conten">
                <div className="img-content">
                  <img src="./assets/ronald.svg" alt="" />
                  <img src="./assets/start1.svg" alt="" />
                </div>
                <h3>Ronald Richards</h3>
                <p>
                  ullamco est sit aliqua dolor do amet sint. Velit officia
                  consequat duis enim velit mollit. Exercitation veniam
                  consequat sunt nostrud amet.
                </p>
              </div>
            </Card>
          </div>
          <div>
            <Card
              sx={{
                borderRadius: "30px",
                width: "410.67px",
              }}
            >
              <div className="card-conten">
                <div className="img-content">
                  <img src="./assets/savannah.svg" alt="" />
                </div>
                <h3>Savannah Nguyen</h3>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet. Amet minim
                  mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                  Velit officia consequat duis enim velit mollit. Exercitation
                  veniam consequat sunt nostrud amet.
                </p>
              </div>
            </Card>
          </div>
          <div>
            <Card sx={{ borderRadius: "30px", width: "410.67px" }}>
              <div className="card-conten">
                <div className="img-content">
                  <img src="./assets/floyd1.svg" alt="" />
                  {/* <img src="./assets/start.svg" alt="" /> */}
                </div>
                <h3>Floyd Miles</h3>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet. Amet minim
                  mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                  Velit officia consequat duis enim velit mollit. Exercitation
                  veniam consequat sunt nostrud amet.
                </p>
              </div>
            </Card>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimony;
