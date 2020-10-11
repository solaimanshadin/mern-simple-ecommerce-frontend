import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login, signup } from '../../dataService/authService';
import { storeUserData } from '../../redux/actions/userActions';

const SignUpOrLogin = ({title}) => {
    const dispatch = useDispatch()
    const  history = useHistory();
    const [formData, setFormData] = useState({})
    const authAction = () => {
        if(title === "Sign Up") {
            signup(formData)
            .then((res) => {
                dispatch(storeUserData(res.data))
                history.push('/add-product')
            } )
            .catch((err)=> console.log(err))
        }else{
            login(formData)
            .then((res) => {
                dispatch(storeUserData(res.data))
                history.push('/add-product')
            } )
            .catch((err)=> console.log(err))
        }
    }

    const handleChange = (e) => {
        setFormData({...formData , [e.target.name] : e.target.value})
    }
    return (
        <div className="container my-5">

        <Form className="col-md-6 p-5 bg-light mx-auto">
            <h3 className="mb-4">{title}</h3>
            {
                title === "Sign Up" && 
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Name </Form.Label>
                    <Form.Control name="fullName" onBlur={(e) => handleChange(e)} type="text" placeholder="Your Name" />
                </Form.Group>
            }
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email </Form.Label>
                <Form.Control name="email" onBlur={(e) => handleChange(e)} type="email" placeholder="Your Email" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Password </Form.Label>
                <Form.Control name="password" onBlur={(e) => handleChange(e)} type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1" className="mt-4">
                <Button onClick={authAction} variant="primary">{title}</Button>
            </Form.Group>
        </Form>
        </div>

    );
};

export default SignUpOrLogin;