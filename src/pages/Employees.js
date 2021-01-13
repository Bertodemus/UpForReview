import React, { Component } from "react";
import API from "../utils/API";
// import Card from "../components/Card";
// import FriendCard from "../components/FriendCard";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

function cellImage(cell, row) {
    return (
      <div>
        <img src={cell}></img>
      </div>
    );
  }

const columns = [{
  dataField: 'picture.thumbnail',
  text: 'Photo',
  align: 'center',
  formatter: cellImage,
  headerStyle: (colum, colIndex) => {
    return { width: '80px', textAlign: 'center' };
  }
}, {
  dataField: 'name.first',
  text: 'First Name',
  sort: true,
  align: 'center',
  filter: textFilter(),
  headerStyle: (colum, colIndex) => {
    return { width: '250px', textAlign: 'left' };
  }
}, {
  dataField: 'name.last',
  text: 'Last Name',
  sort: true,
  align: 'center',
  filter: textFilter(),
  headerStyle: (colum, colIndex) => {
    return { width: '250px', textAlign: 'left' };
  }
}, {
  dataField: 'email',
  text: 'E-Mail',
  sort: true,
  align: 'center',
  filter: textFilter()
}, {
  dataField: 'cell',
  text: 'Phone',
  sort: true,
  align: 'center',
  filter: textFilter(),
  headerStyle: (colum, colIndex) => {
    return { width: '250px', textAlign: 'left' };
  }
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
          <Hero backgroundImage="/assets/images/ufr.png">
            {/* <h1>Up For Review</h1>
            <h2>All your employees in a single view!</h2> */}
          </Hero>
          <Container style={{ marginTop: 30 }}>
            <Row>
              <Col size="md-12">
                <h2>Welcome To UpForReview!</h2>
              </Col>
            </Row>
            <Row>
              <Col size="md-12">

                <p>
                  UFR is a small table with a dash of functionality that allows you to view non-personal data of your current employees. The table columns can be sorted by ascending or descending order. In order to filter, simply type into the desired column you wish to filter. It will instantly update with the results.
                </p>

              <BootstrapTable keyField='id' data={ this.state.employees } columns={ columns } filter={ filterFactory() } striped hover condensed/>
              </Col>
            </Row>
          </Container>
        </div>
      );
    };
}

export default Employees;
