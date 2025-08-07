// HomePage.js
import React from "react";

const WorkPage = () => {
  return (
    <div style={styles.about}>
      <br></br>
      <h2>Work Experience</h2>
      <p>A brief history</p>
      <>
        <div style={styles.profileContainer}>
          <div style={styles.header}>
            <h1>Time Line</h1>
          </div>
          <img
            style={styles.image1}
            src="time-line.png"
            alt="Profile Picture"
          ></img>
          <div style={styles.profileInfo}></div>
          <div style={styles.bio}>
            <h3 style={styles.texthead}>Work</h3>
            <div>
              <p style={styles.biopara}>
                Year: 1989 - Emsworth Fireplaces. After dropping out of college,
                my first job was builiding fireplaces from marble, stone and
                brick. After two years in this dead end job, I realised I needed
                to get out and I decided to re-educate myself and enrolled on
                evening classes to position me for a University placement. It
                took me a further 3 years to pass my exams, get my
                qualifications and finally hand in my notice and start a new
                life at Uni.
              </p>
              <p style={styles.biopara}>
                After 4 years of studying a Computer Science degree at
                University I landed a position at IBM within an operations role.
                Over the following years, I transitioned across multiple
                platforms, eventually becoming the SME for VitalNet, a network
                performance application. I designed, acquired, installed, and
                supported end-to-end solutions, including building 52 xSeries
                servers from scratch—installing hardware, configuring RAID
                arrays, and deploying Windows Server OS, SQL databases, and
                application layers. I also architected and delivered a
                performance monitoring solution for a major UK banking client,
                including report generation and system support.
              </p>
              <p style={styles.biopara}>
                Following IBM’s divestiture to AT&T, my role shifted. While I
                initially continued supporting familiar applications like
                SecureID and EMC Smarts, the scope narrowed as OS and database
                responsibilities were offshored. Despite these changes, I seized
                the opportunity to lead development and support for Watch4net,
                creating custom SNMP collectors and managing the full lifecycle.
                I also built a PHP-based disk space estimator for big data
                storage and developed a team web page to enhance internal
                visibility—work I found deeply rewarding.
              </p>
              <p style={styles.biopara}>
                With time, I began exploring ways to improve efficiency and
                expand my skill set. I initiated dashboard development using
                Grafana, integrating data from APIs, databases, and static files
                into unified visualizations. This reduced the need to access
                multiple systems and sparked interest across teams, with
                potential for broader adoption.
              </p>
              <p style={styles.biopara}>
                Eventually, the product I supported reached end-of-life. Despite
                plans for migration, delays led to the business withdrawing
                operations from the UK, and my role was made redundant.
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
    width: "60%",
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

export default WorkPage;
