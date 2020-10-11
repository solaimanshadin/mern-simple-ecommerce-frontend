import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { postProduct } from '../../dataService/productService';

const AddProduct = () => {
    const history = useHistory()
    
    const [formData, setFromData] = useState({})
    const addProduct = () => {
        postProduct(formData)
        .then(()=> {
            document.getElementById('add').reset()
            setFromData({})
            history.push('/')
        })
        .catch(err=> console.log(err))
    }

    const handleChange = (e) => {
        setFromData({...formData, [e.target.name] : e.target.value})
    }

    return (
        <div className="container my-5">

        <Form id="add" className="col-md-6 p-5 bg-light mx-auto">
            <h3 className="mb-4">Add a Product</h3>
           
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Product name </Form.Label>
                <Form.Control onBlur={e=>handleChange(e)} name="name" type="text" placeholder="Product Name" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Product Description </Form.Label>
                <Form.Control onBlur={e=>handleChange(e)} name="description" type="text" placeholder="Product Description" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Product Image (URL) </Form.Label>
                <Form.Control onBlur={e=>handleChange(e)} name="productImage" type="text" placeholder="Product Image (URL)" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Price </Form.Label>
                <Form.Control onBlur={e=>handleChange(e)} name="price" type="number" placeholder="Price" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1" className="mt-4">
                <Button onClick={addProduct} variant="primary">Add Product</Button>
            </Form.Group>
        </Form>
        </div>

    );
};

export default AddProduct;