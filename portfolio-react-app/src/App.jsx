// App.js
import { useState } from 'react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import LifeStylePage from './pages/LifeStylePage';
import ContactPage from './pages/ContactPage';


// Import Nav Pages
import WebPage from './pages/WebPage';
import IconsPage from './pages/IconsPage';
import ImagesPage from './pages/ImagesPage';
import DocsPage from './pages/DocsPage';
import GithubPage from './pages/GitHubPage';

function App() {

  const [page, setPage] = useState('home'); {/* set default page to 'home' */}
  return (
    <Layout selectedPage={page} onSetPage={setPage}> 
    
    {/* Render a Layout component to display different 'child elements based on value of page
    selectPage is the current page which is initially set to home. onSetPage provides a function to update selected page */}

      {page === 'home' && <HomePage />}
      {page === 'about' && <AboutPage />}
      {page === 'work' && <WorkPage />}
      {page === 'life' && <LifeStylePage />}
      {page === 'contact' && <ContactPage />}
    
       {page === 'web' && <WebPage />}
       {page === 'icons' && <IconsPage />}
       {page === 'images' && <ImagesPage />}
       {page === 'docs' && <DocsPage />}
       {page === 'github' && <GithubPage />}

    </Layout>
  );
}

export default App;
