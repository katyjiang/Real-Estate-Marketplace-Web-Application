import React from 'react';
import './admin.css';
import { Button, Table, Pagination } from 'react-bootstrap';
import Navigation from '../navigation/navigation.js'

import axios from 'axios';
import { ROOT_URL } from '../config/config.js'


class AdminPage extends React.Component{


  constructor(props){
    super(props);
    this.state = {
      data: []
    };
  }

  // call(){
  //   // var getem = {
  //   //   openHouseDate: localStorage
  //   // };
  //   //
  //   // console.log(user);
  //
  //   axios.get(ROOT_URL + '/').then((res) => {
  //       console.log("inside fav viewer");
  //       console.log(res);
  //       this.setState({data: res.body});
  //       console.log(this.state);
  //       })
  //       .catch(function(error) {
  //           console.log(error)
  //       })
  // }

  handleClick = e => {

    axios.get(ROOT_URL + '/admin/usersList')
      .then(function (res) {
          console.log(res);
          console.log(res.data);
          this.setState({data: res.data});
        })
        .catch(function(error) {
            console.log(error)
        })
        console.log(this.state.data);

  }



  render(){

    return(
      <div>
        <Navigation/>
        <h2 class="header">Admin Page</h2>
          <Button className="buttonReview" onClick={this.handleClick}>Start Review!</Button>
          <Table className="adminpage" pagination striped bordered hover>
          <thead>
            <tr>
              <th>UserID</th>
              <th>User Email</th>
              <th colSpan="3">Operation</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark@gmail.com</td>
              <td><Button variant="outline-success">Approve</Button>{' '}</td>
              <td><Button variant="outline-warning">Reject</Button>{' '}</td>
              <td><Button variant="outline-danger">Delete</Button>{' '}</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob@sjsu.edu</td>
              <td><Button variant="outline-success">Approve</Button>{' '}</td>
              <td><Button variant="outline-warning">Reject</Button>{' '}</td>
              <td><Button variant="outline-danger">Delete</Button>{' '}</td>
            </tr>
            <tr>
              <td>3</td>
              <td >Larry3222@gmail.com</td>
              <td><Button variant="outline-success">Approve</Button>{' '}</td>
              <td><Button variant="outline-warning">Reject</Button>{' '}</td>
              <td><Button variant="outline-danger">Delete</Button>{' '}</td>
            </tr>
          </tbody>
      </Table>
      <Pagination class="pagination">
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
      </div>
    );
  };
}

export default AdminPage;
