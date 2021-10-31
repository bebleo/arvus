import React, { Component } from 'react';

import Spinner from 'react-bootstrap/Spinner'
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis } from 'recharts';

import './Chart.css';

interface ChartProps {
  height?: number;
  src: string;
  data?: any[] | null;
  key?: string;
}

interface ChartState {
  loading: boolean;
  data: any[];
}

/** Creates an area chart to visualize the index data. */
export class Chart extends Component<ChartProps, ChartState> {
  constructor(props: ChartProps) {
    super(props);

    if (this.props.src && !this.props.data) {
      this.state = { loading: true, data: [] };
    }

    if (this.props.data) {
      this.state = { loading: false, data: this.props.data };
    }
  }

  static defaultProps = {
    height: 200,
    src: null,
    data: null,
    key: null
  }

  componentDidMount = async () => {
    await fetch(this.props.src)
            .then(response => response.json())
            .then(json => { this.setState({ loading: false, data: json })})
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="loading-container">
          <Spinner animation="border" role="status" />
          Loading...
        </div>
      );
    }

    return (
      <ResponsiveContainer 
        minWidth={100} 
        width={"99%"} 
        height={this.props.height}>
        <AreaChart data={this.state.data}>
          <XAxis dataKey="refDate" />
          <YAxis domain={[70, 140]} />
          <Area 
            type="monotone"
            dataKey="value"
            isAnimationActive={false}
            fill="#007bff" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
