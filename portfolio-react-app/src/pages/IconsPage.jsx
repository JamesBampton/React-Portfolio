// HomePage.js
import React from "react";
import "../assets/css/myStyles.css";
import "../assets/css/cards.css";
import "../assets/css/icons.css";
import "../assets/css/styles.css";
import "../assets/css/team-icons.css";
import "../assets/css/w3-theme-teal.css";
import "../assets/css/carousel.css";
import "../assets/css/cardspin-test.css";
import "../assets/css/flip.css";

// ...existing code...
const IconsPage = () => {
  return (
    <>
      <div id="dashboard" className="content2 grid-containerink">
        <div className="ianda1">
          <div className="w3-padding floating-box-test" id="myHeader">
            <br />
            <br />
            <br />
            <br />
            <div className="centered myfontL">
              ICONS & LOGOS
              <br />
              <p className="myfontS">Designs</p>
            </div>
            <br />
            <br />
            <br />
            <br />
          </div>
          <br />
          <br />
        </div>
      </div>
      <div>
        <br />
        <br />
        <div className="content">
          {/* NG CARD */}
          <div className="card">
            <div className="layer"></div>
            <p
              className="w3-center"
              style={{
                paddingBottom: 0,
                height: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="images/images/ng-blue.png"
                className="w3-circle"
                style={{
                  width: 200,
                  marginBottom: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                alt="Avatar"
              />
            </p>
            <div className="details">
              <h2>
                Application Logo
                <br />
                <br />
                <span>Network Tool Brand logo</span>
              </h2>
            </div>
          </div>
          {/* Repeat other cards as needed, fixing className and style usage */}
          {/* ...other cards... */}
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="container-carousel">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          {/* wrapper for indicators */}
          <ol className="carousel-indicators" style={{ paddingTop: 200 }}>
            <li
              data-target="#myCarousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          {/* Wrapper for slides */}
          <div className="mycarousel-inner">
            <div className="item active" style={{ backgroundColor: "black" }}>
              <div
                className="carousel-content"
                style={{ backgroundColor: "black" }}
              >
                {/* Testimonial 1 */}
                <div className="carousel-card">
                  <div className="layer"></div>
                  <p
                    className="w3-center quote-font"
                    style={{ paddingBottom: 50, fontSize: 40 }}
                  >
                    <i>"Photoshop & Inkscape"</i>
                  </p>
                  <div className="details">
                    <h2>
                      NOTES
                      <br />
                      <span>Created with a mix of graphics packages</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            {/* ...other testimonials... */}
            {/* Left and right controls */}
            <a
              className="left mycarousel-control"
              href="#myCarousel"
              data-slide="prev"
            >
              <img
                src="images/myglyph-left.png"
                style={{ width: "30%", paddingTop: 80 }}
              />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="right mycarousel-control"
              href="#myCarousel"
              data-slide="next"
            >
              <img
                src="images/myglyph-right.png"
                style={{ width: "30%", paddingTop: 80, paddingLeft: 0 }}
              />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <br />
      </div>
    </>
  );
};

export default IconsPage;
// ...existing code...
