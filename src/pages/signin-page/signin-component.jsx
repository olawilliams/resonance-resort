import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './sign-in-styles.scss'
import FormInput from '../../components/form-input/form-input-component';
import CustomButton from '../../components/custom-button/custom-button-component'
import { googleSignInStart, facebookSignInStart, emailSignInStart } from '../../redux/user/user-actions'

const SignInPage = ({ googleSignInStart, facebookSignInStart, emailSignInStart }) => {
  const [ userCredentials, setUserCredentials ] = useState({ email: '', password: ''});

  const handleChange = e => {
      const { name, value } = e.target;
      setUserCredentials({...userCredentials, [name]: value})
  }

  const handleSubmit =  async e => {
    e.preventDefault()
    emailSignInStart({ email, password })
    setUserCredentials({ email: '', password: ''})
  }

  const { email, password } = userCredentials
  return (
      <div className="signin-wrapper">
            <img src={require("../../images/defaultBcg.jpeg")} className='bcg' alt=""/>

            <div className='signin'> 
            
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
        <form  onSubmit={handleSubmit} >
            <FormInput
                name='email' 
                type='email' 
                value={email}
                label='Email'
                handleChange={handleChange}
                required 
            />
            <FormInput
                name='password' 
                type='password' 
                value={password}
                handleChange={handleChange} 
                label='Password'
                required 
                />
                <div className='buttons'>
                    <CustomButton 
                        type='submit'>             
                        Sign in
                    </CustomButton>
                    <CustomButton 
                        onClick ={googleSignInStart}
                        type='button'
                        isGoogleSignIn>            
                        sign in with google
                    </CustomButton>
                    <CustomButton 
                    onClick={facebookSignInStart}
                        type='button'>            
                        sign in with facebook
                    </CustomButton>
                </div>          
        </form>
            <Link to='/signup'>Sign Up</Link>
        </div>
    </div>
       
)}

const mapDispatch = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    facebookSignInStart: () => dispatch(facebookSignInStart()),
    emailSignInStart: userCredentials => dispatch(emailSignInStart(userCredentials)) 
})

export default connect(
                    null,
                     mapDispatch)
                     (SignInPage);