import React from 'react';

const RegisterBootstrap = () => {
    return (
        <div>
            <form>
                <div classname="mb-3">
                    <label for="exampleInputEmail1" classname="form-label">Email address</label>
                    <input type="email" classname="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div classname="mb-3">
                    <label for="exampleInputPassword1" classname="form-label">Password</label>
                    <input type="password" classname="form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" classname="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default RegisterBootstrap;