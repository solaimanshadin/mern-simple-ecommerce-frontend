import React, {useState} from 'react';
import { useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { updateProduct } from '../../dataService/productService';

const EditProduct = (props) => {
    const [product, setProduct] = useState({})
    const [show, setShow] = useState(false);

    useEffect(() => {
        if(props.product) {
            setProduct({...props.product})
        }
    }, [props.product])

    useEffect(() => {
        if(props.editMode) {

            setShow(true)
        }else{
            setShow(false)
        }
    })

    const handleClose = () => {
        props.setEditMode(false)
    };

    const handleChange = (e) => {
        console.log("change")
        setProduct({...product, [e.target.name] : e.target.value})
    }
    const saveUpdate = () => {
        updateProduct(product._id, product)
        .then(() => {
            props.setEditMode(false)
            props.fetchData()

        })

       
    }
    return (
        <Modal  show={show} onHide={handleClose} animation={false}>
            <div className="p-4">
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Product name </Form.Label>
                <Form.Control value={product.name} onChange={e=>handleChange(e)} name="name" type="text" placeholder="Product Name" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Product Description </Form.Label>
                <Form.Control value={product.description} as="textarea" row="2" onChange={e=>handleChange(e)} name="description" type="text" placeholder="Product Description" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Product Image (URL) </Form.Label>
                <Form.Control value={product.productImage} onChange={e=>handleChange(e)} name="productImage" type="text" placeholder="Product Image (URL)" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Price </Form.Label>
                <Form.Control value={product.price} onChange={e=>handleChange(e)} name="price" type="number" placeholder="Price" />
            </Form.Group>

            </div>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={saveUpdate}>
                Save Changes
            </Button>
        </Modal.Footer>
      </Modal>

    );
};

export default EditProduct;