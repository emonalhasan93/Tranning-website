import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../Images/download .png'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate=useNavigate();
    let errorelement;
    if (error) {
      errorelement=
          <div>
            <p className='text-danger'> {error.message='Something went wrong'}</p>
          </div>
       
      }
      if(user){
navigate('/home');
      }

    return (
        <div>
              <div className='d-flex align-items-center'>
                <div style={{height:'1px'}} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{height:'1px'}} className='bg-primary w-50'></div>
            </div>
            {errorelement}
            <div>
            <button 
            onClick={()=>signInWithGoogle()}
               
                 className='btn btn-info d-block mx-auto w-50 my-2'>
                    <img style={{width:'30px'}} className='w-25 me-3' src={google} alt="" />
                   <span>Google Sign in</span>  </button>
            </div>
        </div>
    );
};

export default SocialLogin;