import React, { useState } from 'react';
import '../listing/addList.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container, Row, Col,
  InputGroup, InputGroupAddon, InputGroupText, Input, FormGroup, Label, Form, Button, Jumbotron
} from 'reactstrap';

import {Card, Modal} from 'react-bootstrap';

import Navigation from '../navigation/navigation.js';
import './home.css';

import Image1 from '../landing/1.jpg';

import axios from 'axios';
import { ROOT_URL } from '../config/config.js'

// class ListingFav extends React.Component {
//
//   constructor(props){
//     super(props);
//
//     this.state = {
//       show: false,
//       openHouseDate: "",
//       openHouseStartTime: "",
//       openHouseEndTime: "",
//       _id: "",
//       name:"",
//       email:"",
//       creditScore:"",
//       phone: "",
//       applicationType: "",
//       message: "",
//       employmentInfo: "",
//       reviewStatus: "UnderReview",
//       listingId: "",
//       data: []
//     };
//   }
//
//   render()
//   {
//     const dataFlow = this.props.value;
//     console.log(this.props.value.data);
//     return(
//       <div>
//         <div className="ListingCard">
//           {this.props.value.data.map(card =>
//           <Card key={card._id}>
//             <Card.Body>
//               <Jumbotron>
//                 <h3>Listing: {card.addressLine}, {card.addressCity}, {card.addressState}, {card.addressCountry}, {card.addressZipcode}</h3>
//                 <h4>Listing Type: {card.listingType}</h4>
//                 <h5>Price: {card.price}</h5>
//                 <Container>
//                   <Row>
//                     <Col><h6>Bathrooms: {card.bathrooms}</h6></Col>
//                     <Col><h6>Bedrooms: {card.bedrooms}</h6></Col>
//                     <Col><h6>Parking Space: {card.parkingSpaces}</h6></Col>
//                     <Col><h6>Parking Type: {card.parkingType}</h6></Col>
//                   </Row>
//                   <Row>
//                     <Col><h6>Home Type: {card.homeType}</h6></Col>
//                     <Col><h6>Pool: {card.pool}</h6></Col>
//                     <Col><h6>Square Feet: {card.sqFT}</h6></Col>
//                     <Col><a href={card.photos}>View Photos Here!</a></Col>
//                   </Row>
//                   <Row>
//                     <Col><h6>Description: {card.description}</h6></Col>
//                     <Col><h6>Amenities: {card.otherAmenities}</h6></Col>
//                     { sessionStorage.getItem("role") == "Realtor" && sessionStorage.getItem("role") == "Seller" ?
//                     <Col><h6>Open House Schedule Code: {card._id}</h6></Col>
//                     :
//                     <Col></Col>
//                     }
//                   </Row>
//                   <Row>
//                     { sessionStorage.getItem("role") == "Renter" ?
//                     <Col><h6>Lease Application Code: {card._id}</h6></Col>
//                     :
//                     <Col></Col>
//                     }
//                   </Row>
//                   <h5>Open House Availability</h5>
//                   <Container>
//                     <Row>
//                       <Col><h6>Open House Date: {card.openHouseDate}</h6></Col>
//                       <Col><h6>Open House Start Time: {card.openHouseStartTime}</h6></Col>
//                       <Col><h6>Open House End Time:{card.openHouseEndTime}</h6></Col>
//                     </Row>
//                   </Container>
//                   <Row>
//                   </Row>
//                 </Container>
//                 <h7>Click on the 'Favorite' button next to 'Search' Button to save the search.</h7>
//               </Jumbotron>
//             </Card.Body>
//           </Card>
//         )}
//         </div>
//       </div>
//     )
//   }
// }

class Favorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  //this.setState({data: res.data.data});

  componentDidMount(){

    var params = {
        userId: sessionStorage.getItem("userID")
    };

    axios.get(ROOT_URL + '/favorite-listing-get', params).then((res) => {
        console.log("inside fav viewer");
        console.log(res);
        this.setState({data: res.body});
        console.log(this.state);
        })
        .catch(function(error) {
            console.log(error)
        })
  }

  render()
  {
    const { data } = this.state;
    return(
      <div>
        <Navigation />

       </div>
    )
  }
}

export default Favorite;

//<ListingFav value={this.state}/>
