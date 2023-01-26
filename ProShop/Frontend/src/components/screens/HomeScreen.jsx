import React from 'react'
import { Col, Row } from 'react-bootstrap'
import products from '../../products'
import Products from '../Products'

function HomeScreen() {
    return (
        <>
            <Row>
                    <h1 className='my-3'>Latest Products: -</h1>
                    
                    {products.map( (productss)=>(
                        <Col key={productss._id} sm={12} md={6} lg={6} xl={3}>
                            
                       <Products product={productss}/>
                        </Col>
                    ))}
               
            </Row>
        </>
    )
}

export default HomeScreen