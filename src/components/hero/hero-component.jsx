import React from 'react'
import './hero-styles.scss'
import { withRouter } from 'react-router-dom'
import CustomButton from '../../components/custom-button/custom-button-component'

const Hero = ({ backgroundImage, text, title, history }) => (
    <div className="hero">
         <img className='bcg' src={ backgroundImage } alt="backgroundimage"/>      
            <div className="inner-hero">
                <h1 className="title">{title}</h1>
                <CustomButton onClick={() => 
                    text.toLowerCase().includes('rooms') ? history.push('/rooms') : history.push('/')
                }>{text}</CustomButton>
            </div>
    </div>
);

export default withRouter(Hero);