import React from 'react'
import {Link,useParams} from 'react-router-dom'
import {Row,Col,Image,Button,Card,ListGroup, ListGroupItem} from 'react-bootstrap'
import Ratings from '../Ratings'
import products from '../../products'

const Productscreen = ({match}) => {
  const { id } = useParams();

  const product = products.find((p)=>String(p._id) === id)

  return <>
  <Link className='btn btn-dark my-3' to='/'>Go Back </Link>
  <Row>
    <Col md={6}>
    <Image src={product.image} fluid/>
    </Col>
    <Col md={3}>
      <ListGroup>
        <ListGroupItem>
          <h3>{product.name}</h3>
        </ListGroupItem>
        <ListGroupItem>
        <Ratings ratings={product.rating} text={`${product.numReviews} reviews`}/>
        </ListGroupItem>
        <ListGroupItem>
          ${product.price}
        </ListGroupItem>
        <ListGroupItem>
          {product.description}
        </ListGroupItem>
      </ListGroup>
    </Col>
    <Col md={3}>
      <Card>
       
        <Row>
         <Col> Price:</Col>
         <Col><strong>${product.price}</strong></Col>
        </Row>
        <Row>
         <Col> Status:</Col>
         <Col><strong>{product.countInStock >= 1 ?'Instock':'Out of Stock'}</strong></Col>
        </Row>
        
      </Card>
    </Col>
  </Row>
  </>
  
}

export default Productscreen