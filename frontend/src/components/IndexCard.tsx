import Card from 'react-bootstrap/Card';
import { Link, useRouteMatch } from 'react-router-dom';

import { PriceIndex } from '../models/PriceIndex';


const IndexCard = (props: {priceindex: PriceIndex}) => {
  const value = props.priceindex;
  const date = new Date(value.last_updated);
  const options: Intl.DateTimeFormatOptions = 
    { year: 'numeric', month: 'long', day: 'numeric' };
  
  let { url } = useRouteMatch()

  return (
    <Card bg="light" className="mb-3">
      <Card.Body>
        <Card.Title>
          <Link to={ `${url}/${value.id}` } 
                className="text-reset text-decoration-none">
            { value.title }
          </Link>
        </Card.Title>
        <Card.Text>{ value.description }</Card.Text>
        <Card.Text>
          <Card.Link 
            href={("http://www23.statcan.gc.ca/imdb/p2SV.pl" +
                   "?Function=getSurvey&SDDS=5068")}>
            Description on Statistics Canada website
          </Card.Link>
        </Card.Text>
        <Link to={ `${url}/${value.id}` } className="btn btn-primary">
          View
        </Link>
      </Card.Body>
      <Card.Footer className="text-muted">
        Last updated: { date.toLocaleDateString(undefined, options) }
      </Card.Footer>
    </Card>
  )
};

export default IndexCard;
