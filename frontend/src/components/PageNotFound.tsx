import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

import Page from './Page'

const PageNotFound = () => (
  <Page title="Page Not Found" variant="center">
    <Container className="d-flex flex-column min-height align-items-center">
      <h1>Page Not Found</h1>
      <p>
        We're sorry that page doesn't seem to exist! You may want to try going
        to the <Link to="/">homepage</Link> instead.
      </p>
    </Container>
  </Page>
);

export default PageNotFound;
