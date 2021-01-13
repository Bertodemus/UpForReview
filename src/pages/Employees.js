import React, { Component } from "react";
import API from "../utils/API";
// import Card from "../components/Card";
// import FriendCard from "../components/FriendCard";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import BootstrapTable from 'react-bootstrap-table-next';

function cellImage(cell, row) {
    return (
      <div>
        <img src={cell}></img>
      </div>
    );
  }

const products = [
  {
    id: 1,
    name: "Item 1",
    price: 200
  },
  {
    id: 2,
    name: "Item 2",
    price: 300
  }
];
console.log(products);
const columns = [{
  dataField: 'picture.thumbnail',
  text: 'Photo',
  align: 'center',
  formatter: cellImage,
  headerStyle: (colum, colIndex) => {
    return { width: '90px', textAlign: 'center' };
  }
}, {
  dataField: 'name.first',
  text: 'First Name',
  sort: true,
  align: 'center',
  headerStyle: (colum, colIndex) => {
    return { width: '150px', textAlign: 'left' };
  }
}, {
  dataField: 'name.last',
  text: 'Last Name',
  sort: true,
  align: 'center',
  headerStyle: (colum, colIndex) => {
    return { width: '150px', textAlign: 'left' };
  }
}, {
  dataField: 'email',
  text: 'E-Mail',
  sort: true,
  align: 'center',
}, {
  dataField: 'cell',
  text: 'Phone',
  sort: true,
  align: 'center',
}
];

class Employees extends Component {
  state = {
    employees: []
  };

  // // When the component mounts, load the employees to be displayed
  componentDidMount() {
    this.loadAllEmployees();
  }

  loadAllEmployees = () => {
    API.getAllEmployees()
    .then(res => {
      this.setState({
        employees: res.data.results
      })
    })
    .catch(err => console.log(err));
  };

  render() {
    console.log(this.state.employees);
      return (
        <div>
          <Hero backgroundImage="/assets/images/employees.png">
            <h1>Up For Review</h1>
            <h2>All your employees in a single view!</h2>
          </Hero>
          <Container style={{ marginTop: 30 }}>
            <Row>
              <Col size="md-12">
                <h2>Welcome To Up For Review!</h2>
              </Col>
            </Row>
            <Row>
              <Col size="md-12">

              <BootstrapTable keyField='id' data={ this.state.employees } columns={ columns } striped hover condensed/>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet diam tortor, id
                  consequat mauris ullamcorper eu. Orci varius natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus. Pellentesque et dui id justo finibus
                  sollicitudin at et metus. 
                </p>

                <table className="table table-dark table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Photo</th>
                      <th scope="col">Name</th>
                      <th scope="col">E-mail</th>
                      <th scope="col">Phone Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.employees.map((employee, index) => (
                      <tr>
                        <th scope="row">{index+1}</th>
                        <td><img src={employee.picture.thumbnail}></img></td>
                        <td>{employee.name.first} {employee.name.last}</td>
                        <td>{employee.email}</td>
                        <td>{employee.cell}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>           



                {/* <h3 className="text-center">Your Employees!</h3>
              {this.state.employees.map((employee, index) => (
                <FriendCard
                  id={index}
                  key={index}
                  firstName={employee.name.first}
                  lastName={employee.name.last}
                  image={employee.picture.large}
                />
              ))} */}


              </Col>
            </Row>
          </Container>
        </div>
      );
    };
}

export default Employees;
