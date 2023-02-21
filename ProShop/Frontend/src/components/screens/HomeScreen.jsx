import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
// import products from '../../products'
import Products from '../Products'
import axios from 'axios'


function HomeScreen() {
    const [products, setProducts] = useState([])

    useEffect(() => {

        const fetchProducts = async () => {
            const response = await axios.get('/api/products')

            setProducts(response.data)
        }
        fetchProducts();
    }, [])

    return (
        <>
            <Row>
                <h1 className='my-3'>Latest Products: -</h1>

                {products.map((productss) => (
                    <Col key={productss._id} sm={12} md={6} lg={6} xl={3}>

                        <Products product={productss} />
                    </Col>
                ))}

            </Row>
        </>
    )
}

export default HomeScreen