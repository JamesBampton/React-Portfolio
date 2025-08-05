// HomePage.js
import React from 'react';

const HomePage = () => {
  return (
    <div style={styles.about}>
      <h2>Welcome to my About Page</h2>
      <p>This is the main content of the about page.</p>
      <div className="d-flex justify-content-between align-items-center contain">
        <div>1</div>
        <div>2</div>
      </div>

    </div>
  );
};


const styles = {
  about: { 
    width: '100%',
    paddingTop: '55px',
    paddingLeft: '30px',
    backgroundColor: '#ece4e4ff'
  },
};


export default HomePage;
