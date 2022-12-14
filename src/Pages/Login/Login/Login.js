import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef=useRef('');
    const passwordRef=useRef('');
    const navigate=useNavigate();
    const location=useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorelement;
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
      );
    const [
        signInWithEmailAndPassword,
        user,
        loading,
     
      ] = useSignInWithEmailAndPassword(auth);

      if(user){
        navigate(from,{replace:true}); 
     }
     if (error) {
        errorelement=
            <div>
              <p className='text-danger mt-2'> {error.message='Invalid email or password'}</p>
            </div>
         
        }
      

    const handleSubmit=event=>{
        event.preventDefault();
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
      signInWithEmailAndPassword(email,password);

    }

    
    const resetPassword=async()=>{
        const email=emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
            toast('sent email')
        }
       
        

    }

    const navigateRegister=event=>{
navigate('/register');
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-info mt-3 text-center'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
  </Form.Group>
 

  <Button variant="primary" type="submit">
   Login
  </Button>
</Form>
{errorelement}
<p>New to this account? <Link to='/register' className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}> Please Register</Link></p>

<p>Forget password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset password</button></p>

<SocialLogin></SocialLogin>
<ToastContainer />
        </div>
    );
};

export default Login;