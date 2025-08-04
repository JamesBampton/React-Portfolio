import NavBar from './NavBar';
import Footer from './Footer';

const pages = [
  { name: 'Home', key: 'home' },
  { name: 'About', key: 'about' },
  { name: 'Work', key: 'work' },
  { name: 'LifeStyle', key: 'life' },
  { name: 'GitHub', key: 'github' },
  { name: 'Contact', key: 'contact' },
]

const Layout = ({ children, selectedPage, onSetPage }) => {

  // TODO: what's stored in children, selectedPage, and onSetPage?

  const renderPageLinks = () => {  {/*Dynamically generates a list of clickable sidebar links for each page*/}
   return pages.map(page => (  //Iterate of an array of page objects
       <li
          key={page.key}  // Creates a list item for each page
          style={{
            ...styles.sidebarLink, // Add style to the links based on the css style sidebarLink
            ...(page.key === selectedPage ? styles.selected : {}), // Add adifferent style to link if currnet page is selected.
          }}
          onClick={() => onSetPage(page.key)} // Ehen click the onSetPage function runs to update page
        >
          {page.name}
        </li>
    ));
  }

// This navbar is built and call the renderPageLinks function, which builds the list of navlinks based on items in the pages array. 
  return (
    <div style={styles.container}>
      {/* Adds Navigation menu and executes enderPageLink to dynamically add the list items*/}
      <NavBar /> 

      <div style={styles.main}>
        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <ul>
           {renderPageLinks()}
          </ul>
        </aside>


        {/* Content Area Thi si where the child elements are dumped */}
        <section style={styles.content}>
          {children}
        </section>
      </div>

      {/* Footer This adds the footer */}
      <Footer />
     
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    minWidth: '100vw',
  },
  selected: {
    backgroundColor: '#333',
  },
  main: {
    display: 'flex',
  },
  sidebar: {
    width: '230px',
    backgroundColor: '#97928fff',
    /*opacity: 0.5,*/
    padding: '5px',
    paddingTop: '104px',
  },
  content: {
    flex: 1,
    paddingTop: '0px',
    paddingBottom: '0px',
    paddingLeft: '0px',
    paddingRight: '0px',
    marginTop: '0px'
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
  },
  sidebarLink: {
    display: 'block',
    padding: '5px',
    color: '#000',
    textDecoration: 'none',
    color: '#ffffff'
  },
};

export default Layout;
