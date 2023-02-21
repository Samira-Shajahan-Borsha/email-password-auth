import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.init';


const auth = getAuth(app);

const LoginBootstrap = () => {

    const [success, setSuccess] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    const handlSubmit = event => {

        event.preventDefault();

        setSuccess(false);

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                //Signed in 
                const user = userCredential.user;
                console.log(user);
                form.reset();
                setSuccess(true);
            })
            .catch(error => {
                console.error('Error', error);
            });
    }

    const handleEmailBlur = event => {
        const email = event.target.value
        setUserEmail(email);
        console.log(email);
    }

    const handleForgetPassword = () => {
        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                alert('Password reset email sent. Please check your email');
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-primary'>Please Login!! </h3>
            <form onSubmit={handlSubmit}>
                <div classname="mb-3">
                    <label htmlFor="formGroupExampleInput" classname="form-label">Email</label><br />
                    <input type="email" onBlur={handleEmailBlur} name="email" classname="form-control" id="formGroupExampleInput" placeholder="Your Email" required />
                </div>
                <div classname="mb-3">
                    <label htmlFor="formGroupExampleInput2" classname="form-label">Password</label><br />
                    <input type="password" name="password" classname="form-control" id="formGroupExampleInput2" placeholder="Your Password" required />
                </div> <br />
                <button className="btn btn-primary" type="submit">Login</button>
            </form>

            {
                success && <p className='text-success mt-3'>User log in successful</p>
            }
            <p><small>New to this website? Please <Link to='/register'>Register</Link></small></p>
            <p><small>Forget Password? <button onClick={handleForgetPassword} type="button" className="btn btn-link">Please Reset</button></small></p>
        </div>
    );
};

export default LoginBootstrap;