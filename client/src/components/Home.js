import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    }
  this.handleClick = this.handleClick.bind(this);
}

componentDidMount(){
fetch("https://randomuser.me/api/?results=500")
.then(res => res.json())
.then(
  (result) => {
    this.setState({
      isLoaded: true,
      data: result.results
    });
  },
  (error) => {
    this.setState({
      isLoaded: true,
      error
    })
  }
)
}


handleClick(){
  console.log("Success")
}

render() {
  return(
    <div>
      <h1>Home Component</h1>
      <Button color="primary">primary</Button>

    </div>
  )
}
}
export default Home;
