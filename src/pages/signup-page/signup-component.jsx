import React, { useState } from 'react'
import './signup-styles.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import FormInput from '../../components/form-input/form-input-component';
import CustomButton from '../../components/custom-button/custom-button-component'
import { emailSignUpStart } from '../../redux/user/user-actions'

const SignUpPage = ({ emailSignUpStart }) => {
  const [ userCredentials, setUserCredentials ] = useState({ 
                                                            name: '', 
                                                            email: '',
                                                            password: ''
                                                        });
const { email, password, name } = userCredentials
  const handleChange = e => {
      const { name, value } = e.target;
      setUserCredentials({...userCredentials, [name]: value})
  }

  const handleSubmit = async e => {
    e.preventDefault()
    emailSignUpStart({email, password, name})
    setUserCredentials({ email: '', password: '', name: ''})
  }

  
  return (
      <div className="signup-wrapper">
            <img src={require("../../images/defaultBcg.jpeg")} className='bcg' alt=""/>

            <div className='signup'> 
            
            <h2>Create Your Account</h2>
            
        <form  onSubmit={handleSubmit} >
            <FormInput
                 name='name'
                type='name' 
                value={name}
                label='Name'
                handleChange={handleChange}
                required 
                />
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
                <div className="cta">
                  <CustomButton 
                      type='submit'>             
                      sign up
                  </CustomButton>

                  <div className="already">
                    <span>already have an account?</span>
                    <Link className="already-signin" to='/login'>sign in </Link>

                  </div>
              </div>                   
        </form>

        </div>
    </div>
       
)}

const mapDispatch = dispatch => ({
    emailSignUpStart: userCredentials => dispatch(emailSignUpStart(userCredentials))
})

export default connect(
                    null,
                     mapDispatch)
                     (SignUpPage);