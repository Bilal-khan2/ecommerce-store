import React from 'react'
import { Card } from 'react-bootstrap'
import Ratings from './Ratings'
function Products({ product }) {
    return (
        <>
            <Card className='my-3 p-3 card'>
                <a href={`/product/${product._id}`}>
                    <Card.Img src={product.image} />
                </a>
                <Card.Body>
                    <a href={`/product/${product._id}`}>

                        <Card.Title as="div"><h6>{product.name}</h6></Card.Title>
                    </a>
                    <Card.Text as="div"><Ratings ratings={product.rating} text={`${product.numReviews} reviews`}/></Card.Text>
                    <Card.Text as="div"><p>${product.price}</p></Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Products