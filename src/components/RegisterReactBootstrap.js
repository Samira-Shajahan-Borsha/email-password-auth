import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import app from '../firebase/firebase.init';

const auth = getAuth(app);

const RegisterReactBootstrap = () => {

    const [passwordError, setPasswordError] = useState('');


    const handleRegister = (event) => {

        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setPasswordError('Please provide at least two upper case');
            return;
        }
        if (!/.{8}/.test(password)) {
            setPasswordError('Please provide at least 8 characters');
            return;
        }
        if (!/(?=.*[!@#$&*])/.test(password)) {
            setPasswordError('Please provide at least one special character');
            return;
        }

        setPasswordError('');

        console.log(email, password);

        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch(error => {
                console.error('error', error);
            })

        event.target.email.value = '';
        event.target.password.value = '';
    }


    return (
        <div className='w-50 mx-auto my-5'>
            <h1 className='text-primary'>Please Register!!</h1>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <p className='text-danger'>{passwordError}</p>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default RegisterReactBootstrap;