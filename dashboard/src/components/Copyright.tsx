import Container from 'react-bootstrap/Container';
import './Copyright.scss';

export const Copyright = () => {
  return (
    <footer className="bg-info footer mt-auto py-3">
      <Container className="text-light text-left">
        Data: Contains information licensed under the&nbsp;
        <a className="text-light"
            href="https://open.canada.ca/en/open-government-licence-canada">
          Open Government Licence – Canada</a>.<br/>
        &copy; 2021, James Warne
      </Container>
    </footer>
  )
};
