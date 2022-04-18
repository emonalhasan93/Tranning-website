import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';




const Register = () => {
   
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

      const [updateProfile, updating] = useUpdateProfile(auth);
     
    const navigate=useNavigate();
    const navigateLogin=()=>{
        navigate('/login');
    }
   
 
    const handleeRegister=async (event)=>{
        event.preventDefault();
        const name=event.target.name.value;
        const email=event.target.email.value;
        const password=event.target.password.value;
      
     
   await createUserWithEmailAndPassword(email,password);
   await updateProfile({ displayName:name });

navigate('/home');
           
    }
    return (
        <div className='register-form'>
           <h2 className='text-center text-info '>Please register</h2>
           <form onSubmit={handleeRegister}>
               <input  type="text" name="name" id="" placeholder='your name'  />
               <input type="email" name="email" id="" placeholder='your email' required />
               <input type="password" name="password" id="" placeholder='your password' required />
              

               <input className='btn btn-primary text-white w-50 mx-auto ' type="submit" value="Register" />
           </form>
           <p>Already have a account? <Link to='/login' className='text-primary pe-auto' onClick={navigateLogin} >Please Login</Link></p>
         <SocialLogin></SocialLogin>

        </div>
    );
};

export default Register;