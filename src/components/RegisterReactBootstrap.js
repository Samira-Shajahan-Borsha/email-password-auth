import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.init';

const auth = getAuth(app);

const RegisterReactBootstrap = () => {

    const [passwordError, setPasswordError] = useState('');

    const [success, setSuccess] = useState(false);


    const handleRegister = (event) => {

        event.preventDefault();

        setSuccess(false);

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setPasswordError('Please provide at least two upper case');
            return;
        }
        if (!/.{6}/.test(password)) {
            setPasswordError('Please provide at least 6 characters');
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
                setSuccess(true);
                form.reset();
            })
            .catch(error => {
                console.error('error', error);
                setPasswordError(error.message);
            })
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
                {
                    success && <p className='text-success'>User created successfully.</p>
                }
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p><small>Already have an account? Please <Link to='/login'>Login</Link>. </small></p>
        </div>
    );
};

export default RegisterReactBootstrap;