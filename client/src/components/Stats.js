import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

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
  Charts(FusionCharts);

  const myDataSource = {
    chart: {
      caption: 'Harry\'s SuperMart',
      subCaption: 'Top 5 stores in last month by revenue',
      numberPrefix: '$',
    },
    data: [
      {
        label: 'Bakersfield Central',
        value: '880000',
      },
      {
        label: 'Garden Groove harbour',
        value: '730000',
      },
      {
        label: 'Los Angeles Topanga',
        value: '590000',
      },
      {
        label: 'Compton-Rancho Dom',
        value: '520000',
      },
      {
        label: 'Daly City Serramonte',
        value: '330000',
      },
    ],
  };

  const chartConfigs = {
    type: 'column2d',
    width: 600,
    height: 400,
    dataFormat: 'json',
    dataSource: myDataSource,
  };

  const chartConfigsp = {
  type: 'pie3d',
  width: 600,
  height: 400,
  dataFormat: 'json',
  dataSource: {
    "chart": {
        "caption": "Age profile of website visitors",
        "subcaption": "Last Year",
        "startingangle": "120",
        "showlabels": "0",
        "showlegend": "1",
        "enablemultislicing": "0",
        "slicingdistance": "15",
        "showpercentvalues": "1",
        "showpercentintooltip": "0",
        "plottooltext": "Age group : $label Total visit : $datavalue",
        "theme": "ocean"
    },
    "data": [
        {
            "label": "Teenage",
            "value": "1250400"
        },
        {
            "label": "Adult",
            "value": "1463300"
        },
        {
            "label": "Mid-age",
            "value": "1050700"
        },
        {
            "label": "Senior",
            "value": "491000"
        }
    ]
},
};


  return(
    <div style={{ background: 'white' }}>

      <h1>Charts</h1>
      <Row>
      <Col>
      <ReactFC {...chartConfigsp} />
      <Col> <ReactFC {...chartConfigs} /> </Col>
      <ReactFC {...chartConfigsp} />

      </Col>
      <Col>
      <Row>
        <Col> <ReactFC {...chartConfigsp} /></Col>
        <Col> <ReactFC {...chartConfigs} /> </Col>
        <Col> <ReactFC {...chartConfigsp} /></Col>
      </Row>
      </Col>
     </Row>

  </div>
  )
}

}

export default Stats;
