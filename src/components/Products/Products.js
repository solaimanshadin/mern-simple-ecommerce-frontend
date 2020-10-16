import React, { useEffect, useState } from 'react';
import { Button, Card, CardDeck } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                        <Card className="text-center">
                            <Card.Img variant="top" src={product.productImage} />
                            <Card.Body>
                                <Card.Title className="h6">{product.name}</Card.Title>
                                <Card.Text className="font-weight-bold">
                                    $ {product.price}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Link to={"/product/"+product._id} className="btn btn-primary"> View Details </Link>
                            </Card.Footer>
                        </Card>
                    )
                }

            </CardDeck>
        </div>
    );
};

export default Products;