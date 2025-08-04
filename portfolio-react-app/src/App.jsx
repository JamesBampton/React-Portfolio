// App.js
import { useState } from 'react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import WorkPage from './pages/WorkPage';
import GithubPage from './pages/GitHubPage';

function App() {

  const [page, setPage] = useState('home'); {/* set default page to 'home' */}
  return (
    <Layout selectedPage={page} onSetPage={setPage}> 
    
    {/* Render a Layout component to display different 'child elements based on value of page
    selectPage is the current page which is initially set to home. onSetPage provides a function to update selected page */}

      {page === 'home' && <HomePage />}
      {page === 'about' && <AboutPage />}
      {page === 'contact' && <ContactPage />}
      {page === 'work' && <WorkPage />}
      {page === 'github' && <GithubPage />}

    </Layout>
  );
}

export default App;
