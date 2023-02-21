import React from 'react';
import { Link } from 'react-router-dom';

const LoginBootstrap = () => {
    const handlSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
    }
    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-primary'>Please Login!! </h3>
            <form onSubmit={handlSubmit}>
                <div classname="mb-3">
                    <label for="formGroupExampleInput" classname="form-label">Email</label><br />
                    <input type="email" name="email" classname="form-control" id="formGroupExampleInput" placeholder="Your Email" required />
                </div>
                <div classname="mb-3">
                    <label for="formGroupExampleInput2" classname="form-label">Password</label><br />
                    <input type="password" name="password" classname="form-control" id="formGroupExampleInput2" placeholder="Your Password" required />
                </div> <br />
                <button className="btn btn-primary" type="submit">Login</button>
            </form>
            <p><small>New to this website? Please <Link to='/register'>Register</Link></small></p>
        </div>
    );
};

export default LoginBootstrap;