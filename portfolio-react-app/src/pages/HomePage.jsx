// HomePage.js
import React from 'react';

const HomePage = () => {
  return (
   <div id="container2" className="d-flex flex-column justify-content-between align-items-center" style={styles.container2}>
      <img src="/portfolio4.png" alt="Portfolio" style={styles.container2}></img>
    </div>
  );
};


const styles = {
  container2: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },

  };


export default HomePage;
