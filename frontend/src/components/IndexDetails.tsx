import { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import { useParams } from 'react-router-dom';

import Page from './Page';
import { PriceIndex } from '../models/PriceIndex';
import { checkStatus } from './checkStatus';


interface IndexDetailsParams {
  id: string
}

const IndexDetails = (props: PriceIndex) => {
  const { id } = useParams<IndexDetailsParams>();
  const [ showNotice, setShowNotice ] = useState(true);
  const [ priceIndex, setPriceIndex ] = useState(props);

  const options: Intl.DateTimeFormatOptions = 
    { year: 'numeric', month: 'long', day: 'numeric', hour: "2-digit", hourCycle: "h23", minute: "2-digit", timeZoneName: "short" };

  const URL = "/data/data.json";

  useEffect(() => {
    fetch(URL.toString())
      .then(checkStatus)
      .then(response => response.json())
      .then(json => setPriceIndex(json.find((i: PriceIndex) => i.id === id)))
  }, [id]);

  return (
    <Page title={`${priceIndex.title} - Bebleo`}>
        <Alert variant="danger" 
               onClose={() => setShowNotice(false)} 
               show={showNotice} 
               dismissible>
          <Alert.Heading>Notice</Alert.Heading>
          Information is presented here for demonstration purposes only and is 
          not intended for use as a source of data.
        </Alert>
        <h1>{priceIndex.title}</h1>
        <Row>
          <Col className="font-weight-bold col-2">Last Updated:</Col>
          <Col>{new Date(priceIndex.last_updated).toLocaleDateString(undefined, options)}</Col>
        </Row>
        <Row>
          <Col className="font-weight-bold col-2">Description:</Col>
          <Col>{priceIndex.description}</Col>
        </Row>
    </Page>
  )
};

export default IndexDetails;
