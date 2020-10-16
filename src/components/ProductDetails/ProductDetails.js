import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../dataService/productService';
import EditProduct from '../EditProduct/EditProduct';

const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const {id} = useParams()
    const fetchData = () => {
        getProductById(id)
        .then((res) => setProduct(res.data))
    }
    useEffect(() => {
        fetchData()
    }, [])
    const  user = useSelector(state => state.user)
    const [editMode, setEditMode] = useState(false)
    return (
        <div className="my-5 container">
            <div className="row">
                <div className="col-md-6">
                    <img src={product.productImage} className="img-fluid" alt=""/>
                </div>
                <div className="col-md-6">
                    <h1>{product.name}</h1>
                    {
                        user &&  <Button onClick={() => setEditMode(true)}>Edit Product</Button>

                    }

                    <h2 className="mb-5 mt-3 text-warning">${product.price} </h2>
                    
                    <p>{product.description}</p>
                </div>
            </div>
            <EditProduct fetchData={fetchData} product={product} editMode={editMode} setEditMode={setEditMode} />
        </div>
    );
};

export default ProductDetails;