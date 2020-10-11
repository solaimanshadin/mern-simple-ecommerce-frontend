import React, { useEffect, useState } from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import { getProducts } from '../../dataService/productService';
import './products.css'
const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts()
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => console.log(err))
    }, [])
    return (
        <div className="container my-5 products">
            <h3 className="mb-5">All products</h3>

            <CardDeck>
                {
                    products.map((product) =>
                        <Card>
                            <Card.Img variant="top" src="https://via.placeholder.com/150" />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>
                                    {product.description}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    )
                }

            </CardDeck>
        </div>
    );
};

export default Products;