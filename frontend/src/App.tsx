import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Copyright } from './components/Copyright';
import SearchBar from './components/SearchBar';
import Routes from './Routes';


const App = () => {
  return (
    <div className="App">
      <Router>
        <header>
          <Navbar collapseOnSelect bg="light" expand="lg">
            <LinkContainer to="/">
              <Navbar.Brand className="font-weight-bold nav-link">
                <span className="darkorange">Bebleo</span>
              </Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse>
              <Nav className="mr-auto text-left nav-link">
                <LinkContainer to="/indices">
                  <Nav.Link>Indices</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about">
                  <Nav.Link>About</Nav.Link>
                </LinkContainer>
              </Nav>
              <SearchBar />
            </Navbar.Collapse>
          </Navbar>
        </header>
        <div className="mt-3 main" role="main">
          <Routes />
        </div>
      </Router>
      <footer>
        <Copyright />
      </footer>
    </div>
  );
}

export default App;
