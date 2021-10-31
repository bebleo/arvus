import { Component } from 'react';

import Alert from 'react-bootstrap/Alert';
// import Badge from 'react-bootstrap/Badge';

import { checkStatus } from './checkStatus';
import IndexCard from './IndexCard';
import Page from './Page';
import { PriceIndex } from '../models/PriceIndex';


interface IndicesProps {
  url: string
}

interface IndicesState {
  indices: PriceIndex[],
  show: boolean
}

// const NewBadge = () => (
//   <sup>&nbsp;<Badge variant="danger">New</Badge></sup>
// );


class Indices extends Component<IndicesProps, IndicesState> {
  constructor(props: IndicesProps) {
    super(props);
    this.state = { indices: [], show: true }
  }

  static defaultProps = {
    url: "./data/data.json"
  }

  async componentDidMount() {
    fetch(this.props.url.toString())
      .then(checkStatus)
      .then(response => response.json())
      .then(json => this.setState({ indices: json }))
  }

  render() {
    
    return (
      <Page title="Indices - Bebleo">
        <Alert variant="danger" 
               onClose={() => this.setState({ show: false })} 
               show={this.state.show} 
               dismissible>
          <Alert.Heading>Notice</Alert.Heading>
          Information is presented here for demonstration purposes only and is 
          not intended for use as a source of data.
        </Alert>
        <h1>Indices</h1>
        <p>Currently we publish visualizations of the following indices:</p>
        {this.state.indices.map((value: PriceIndex, index: number) => 
          (<IndexCard priceindex={value} key={index} />)
        )}
      </Page>
    )
  }
}

export default Indices;
