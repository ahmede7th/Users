import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import { Chart, Axis, Series, Tooltip, Cursor, Line } from "react-charts";

class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      chart: ''
    }
  }

componentDidMount(){
  let x = this.props.data.map(yer=>{
    console.log(yer.dob.age)
    return yer.dob.age
  })

  this.setState({
    data:x
  })

}


render(){

  return(
    <div style={{ background: 'white' }}>
    <Row>
      <h1>Charts</h1>
      
        <Chart
    data={[
      {
        label: "Series 1",
        data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
      },
      {
        label: "Series 2",
        data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
      }
    ]}
  >
    <Axis primary type="time" />
    <Axis type="linear" />
    <Series type={Line} />
  </Chart>


    </Row>
  </div>
  )
}

}

export default Stats;
