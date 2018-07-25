import React, {Component} from 'react';
import Stats from './Stats.js'
import {
  Breadcrumb,
  BreadcrumbItem,
  Container,
  Row,
  Col,
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle
} from 'reactstrap';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    }
    this.handleClick = this.handleClick.bind(this);
    this.userFunc = this.userFunc.bind(this);
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=50")
    .then(res => res.json())
    .then((result) => {
      this.setState({isLoaded: true, button: false, data: result.results});
    },
    (error) => {
      this.setState({error})
    })

  }

  handleClick(e) {
    e.preventDefault();
    this.setState({button: true})
  }

  userFunc() {
    return (
      <div>
      <Stats data={this.state.data}/>
      <br />
      {
        this.state.data.map(results =>
          <Container key={results.login.md5}>
          <div>
            <div>
              <Card>
                <CardBody>
                  <CardTitle>{results.name.first}
                    {results.name.last}</CardTitle>
                  <CardSubtitle>{results.gender}</CardSubtitle>
                </CardBody>
                <CardImg top width="100%" src={results.picture.large} alt={results.name.first} />
                <CardBody>
                  <CardText>
                    {results.email}
                    <br/> {results.phone}
                  </CardText>
                  <CardText>
                    {results.location.street}
                    <br/><br/> {results.location.city}
                  </CardText>
                </CardBody>
              </Card>
            </div>
          </div>
        </Container>
      )
      }
    </div>)
  }

  render() {
    return (<div>
      <Row>
        <Col>
          <div>
            <Breadcrumb>
              <BreadcrumbItem>
                <a href="#">Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a href="#">Library</a>
              </BreadcrumbItem>
              <BreadcrumbItem>Data</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </Col>
      </Row>
      <div>
        <h1 style={{
            color: 'white'
          }}><Button color="primary" onClick={this.handleClick}>Load Users</Button></h1>
        <br /><br />
        {/* {this.userFunc()} */}
        {
          this.state.button
            ? this.userFunc()
            : ''
        }
        
      </div>
    </div>)
  }
}
export default Home;
