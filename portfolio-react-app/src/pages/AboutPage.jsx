// HomePage.js
import React from "react";

const HomePage = () => {
  return (
    <div style={styles.about}>
      <br></br>
      <h2>Welcome</h2>
      <p>A brief introduction</p>
      <>
        <div style={styles.profileContainer}>
          <div style={styles.header}>
            <h1>James Bampton Bsc Hons</h1>
          </div>
          <img
            style={styles.image1}
            src="james-smaller.png"
            alt="Profile Picture"
          ></img>
          <div style={styles.profileInfo}></div>
          <div style={styles.bio}>
            <h3 style={styles.texthead}>About</h3>
            <div>
              <p style={styles.biopara}>
                A versatile IT professional, transitioning into web development,
                where I can fully integrate my technical strengths with my
                creative instincts. With a background in network management,
                application development, and automation, I bring a robust
                technical toolkit and a deep appreciation for intuitive,
                user-focused design.
              </p>
              <p style={styles.biopara}>
                My most recent role, I used the power of Grafana to build
                complex, insightful data visualizations, drawing from APIs,
                databases, and log files. This has amplified my ability to turn
                raw, intricate data into accessible and intuitive dashboards, a
                skill that perfectly complements my broader mission of making
                tech beautifully usable.
              </p>
              <p style={styles.biopara}>
                What drives me is the intersection of usability and
                functionality, I'm passionate about crafting visualizations that
                are not only elegant but empower users with clarity and ease. I
                believe the smallest design details can have the biggest impact,
                which is why I focus on delivering well-structured, visually
                clear solutions that respect both form and function.
              </p>
              <p style={styles.biopara}>
                Currently building on my front-end and back-end skills through
                immersive full stack training, I’m confident working with HTML,
                CSS, JavaScript, Bootstrap, and design tools like Inkscape and
                Adobe Photoshop.I enjoy creating and transforming designs into
                something where end users enjoy the full experience.
              </p>
              <p style={styles.biopara}>
                Collaborative by nature and experienced in Agile workflows, I
                thrive in multidisciplinary environments where I can communicate
                effectively with stakeholders, developers, and end users alike.
                As I expand my technical support skills into a design-conscious
                full stack developer, I’m seeking a role where innovation, user
                experience, and visual integrity are at the core of every
                project
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

const styles = {
  about: {
    width: "100%",
    paddingTop: "55px",
    paddingLeft: "30px",
    backgroundColor: "#ece4e4ff",
    height: "100%",
    paddingBottom: "1px",
  },
  profileContainer: {
    maxWidth: "800px",
    margin: "20px auto",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
  },

  profileInfo: {
    display: "flex",
    alignItems: "center",
    padding: "20px",
  },

  bio: {
    paddingTop: "10px",
    paddingLeft: "40px",
    paddingRight: "40px",
    paddingBottom: "30px",
    lineHeight: "1.6",
  },
  biopara: {
    paddingTop: "20px",
    paddingLeft: "80px",
    paddingRight: "80px",
    lineHeight: "1.6",
    textAlign: "left",
    alignItems: "start",
  },
  header: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
  },
  image1: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "40%",
    paddingTop: "20px",
  },

  texthead: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "20%",
    paddingTop: "10px",
  },
};

export default HomePage;
