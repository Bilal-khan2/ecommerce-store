import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import Ratings from '../Ratings'
import products from '../../products'
import '../style.css'

const Productscreen = ({ match }) => {
  const { id } = useParams();

  const product = products.find((p) => String(p._id) === id)

  return <>
    <Link className='btn btn-dark my-3' to='/'>Go Back </Link>
    <Row>
      <Col md={6}>
        <Image src={product.image} fluid />
      </Col>
      <Col md={3}>
        <ListGroup>
          <ListGroupItem>
            <h3>{product.name}</h3>
          </ListGroupItem>
          <ListGroupItem>
            <Ratings ratings={product.rating} text={`${product.numReviews} reviews`} />
          </ListGroupItem>
          <ListGroupItem>
            <h5> ${product.price}</h5>
          </ListGroupItem>
          <ListGroupItem>
            <h5>Description:</h5>
            {product.description}
          </ListGroupItem>
        </ListGroup>
      </Col>
      <Col md={3}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <Row>
                <Col> Price:</Col>
                <Col><b>${product.price}</b></Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>

          <ListGroup variant='flush'>
            <ListGroupItem>
              <Row>
                <Col> Status:</Col>
                <Col><strong>{product.countInStock >= 1 ? 'Instock' : 'Out of Stock'}</strong></Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Button className='btn-Block btn-dark cart_btn' type='button' disabled={product.countInStock === 0 }>Add To Cart</Button>
            </ListGroupItem>
          </ListGroup>


        </Card>
      </Col>
    </Row>
  </>

}

export default Productscreen