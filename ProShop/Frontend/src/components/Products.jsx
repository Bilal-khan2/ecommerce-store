import React from 'react'
import { Card } from 'react-bootstrap'
// import products from '../products'

function Products({ product }) {
    return (
        <>
            <Card className='my-3 p-3 '>
                <a href={`/product/${product._id}`}>
                    <Card.Img src={product.image} />
                </a>
                <Card.Body>
                    <a href={`/product/${product._id}`}>

                        <Card.Title as="div"><h6>{product.name}</h6></Card.Title>
                    </a>
                    <Card.Text as="div"><p>{product.rating } from {product.numReviews}</p></Card.Text>
                    <Card.Text as="div"><p>${product.price}</p></Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Products