import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

class Employees extends Component {
  state = {
    firstName: "",
    lastName: "",
    image: "",
  };

  // // When the component mounts, load the employees to be displayed
  componentDidMount() {
    this.loadAllEmployees();
  }

  loadAllEmployees = () => {
    API.getAllEmployees()
      .then(res =>
        this.setState({
          firstName: res.data.results[0].name.first,
          lastName: res.data.results[0].name.last,
          image: res.data.results[0].picture.large
        })
      )
      .catch(err => console.log(err));
  };

  render() {
      return (
        <div>
          <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
            <h1>Employeester</h1>
            <h2>All the employees you've ever wanted</h2>
          </Hero>
          <Container style={{ marginTop: 30 }}>
            <Row>
              <Col size="md-12">
                <h1>Welcome To Employeester!</h1>
              </Col>
            </Row>
            <Row>
              <Col size="md-12">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet diam tortor, id
                  consequat mauris ullamcorper eu. Orci varius natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus. Pellentesque et dui id justo finibus
                  sollicitudin at et metus. 
                </p>

                <div>
                  <h3 className="text-center">Your Employees!</h3>
                  <Card image={this.state.image} />
                  <h3 className="text-center">
                    Name: {this.state.firstName} {this.state.lastName}
                  </h3>
                </div>

              </Col>
            </Row>
          </Container>
        </div>
      );
    };
}

export default Employees;
