import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h3 className='text-center text-info mt-5 mb-3'>Q:Authorization vs Authentication</h3>
            <h4 className='text-center'>Ans::Authentication is the system of verifying who someone is here, whereas authorization is the System of verifying about specific applications, files and a user has access to.
            Authentication is visible to and partially changeable by the user.but Authorization isn’t visible to or changeable by the user.
            </h4>
            <h3 className='text-center text-info mt-5 mb-3' >Q:Why are you using firebase? What other options do you have to implement authentication?</h3>
            <h4 className='text-center'>Ans::Firebase Authentication helps to building secure sign-in for any system easy. This  the solution supports email and passowrd, phone auth, & mult-platform login.This helps to make System more secure and useable.
            1.Password base Auhentication.
            2.Microsoft Authentication provider.
            3.OATh Software tokens base authentication.



            </h4>
            <h3 className='text-center text-info mt-5 mb-3'>Q:What other services does firebase provide other than authentication?</h3>
            <h4 className='text-center'>Ans::Firebase Authentication does backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app.</h4>
        </div>
    );
};

export default Blogs;