import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';




const Register = () => {
    // const[agree,setAgree]=useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
      ] = useCreateUserWithEmailAndPassword(auth);
     
    const navigate=useNavigate();
    const navigateLogin=()=>{
        navigate('/login');
    }
    if(user){
        navigate('/home');
    }
 
    const handleeRegister= event=>{
        event.preventDefault();
        const name=event.target.name.value;
        const email=event.target.email.value;
        const password=event.target.password.value;
        // const agree=event.target.terms.checked;
     
    createUserWithEmailAndPassword(email,password);
           
    }
    return (
        <div className='register-form'>
           <h2 className='text-center text-info '>Please register</h2>
           <form onSubmit={handleeRegister}>
               <input  type="text" name="name" id="" placeholder='your name'  />
               <input type="email" name="email" id="" placeholder='your email' required />
               <input type="password" name="password" id="" placeholder='your password' required />
              

               <input type="submit" value="Register" />
           </form>
           <p>Already have a account? <Link to='/login' className='text-danger pe-auto' onClick={navigateLogin} >Please Login</Link></p>
         

        </div>
    );
};

export default Register;