// GitHubPage.js
import React, { useState, useEffect } from "react"; // import react library and two 'hooks', useState and useEffect

const LifeStylePage = () => {
  return (
    <div style={styles.about}>
      <br></br>
      <h2>Lifestyle</h2>
      <p>In a nutshell</p>
      <>
        <div style={styles.profileContainer}>
          <div style={styles.header}>
            <h1>James Bampton BMX Bandit</h1>
          </div>
          <img
            style={styles.image1}
            src="hofner2.png"
            alt="Profile Picture"
          ></img>
          <div style={styles.profileInfo}></div>
          <div style={styles.bio}>
            <h3 style={styles.texthead}>Life</h3>
            <div>
              <p style={styles.biopara}>
                Outside of work, I’m a proud father of two and love spending
                time with my family. We’re often out exploring, with regular
                trips to London and Brighton to indulge in great food and a bit
                of retail therapy.
              </p>
              <p style={styles.biopara}>
                Health and fitness have always been part of my life. I aim to
                eat well—not obsessively, but with an awareness of the benefits
                of a balanced diet. I’ve been active since my teens, starting
                with athletics and football. Though I retired from competitive
                park football in my late twenties, I kept playing casually for
                years until injuries slowed me down. That said, I still make the
                occasional cameo appearance on the pitch.
              </p>
              <p style={styles.biopara}>
                These days, I stay fit through a mix of running, gym sessions,
                and boxing. I joined a local boxing club to recapture the
                adrenaline I used to get from football. A few years ago, I took
                part in a charity boxing match, won my bout, and retired
                undefeated—1 win, 0 losses, 0 draws. I’m keeping it that way.
              </p>
              <p style={styles.biopara}>
                Music is another passion. I play guitar in an indie rock band
                that formed after I volunteered for a school year-end show. That
                spontaneous decision turned into something lasting, and we’ve
                been playing together ever since.
              </p>
              <p style={styles.biopara}>
                Creativity has always been part of me. I was very artistic at
                school but didn’t pursue it professionally. In recent years,
                I’ve rediscovered that side through graphic and front-end
                design. I can spend hours perfecting visuals just me, the
                design, and some good music.
              </p>
              <p style={styles.biopara}>
                And then there’s my BMX. I used to ride seriously and even
                rubbed shoulders with world champions. Though I grew up and
                moved on, I held onto my bike. I recently restored it and
                started riding again. It’s a nostalgic thrill and proof that
                you’re never too old to reconnect with what you love.
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

export default LifeStylePage;
