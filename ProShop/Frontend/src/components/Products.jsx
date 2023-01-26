import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Ratings from './Ratings'
function Products({ product }) {
    return (
        <>
            <Card className='my-3 p-3 card'>
                <Link to={`/product/${product._id}`}>
                    <Card.Img src={product.image} />
                </Link>
                <Card.Body>
                    <Link to={`/product/${product._id}`}>

                        <Card.Title as="div"><h6>{product.name}</h6></Card.Title>
                    </Link>
                    <Card.Text as="div"><Ratings ratings={product.rating} text={`${product.numReviews} reviews`}/></Card.Text>
                    <Card.Text as="div"><strong><p>${product.price}</p></strong></Card.Text>
                    
                    

                </Card.Body>
            </Card>
        </>
    )
}

export default Products