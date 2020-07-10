import React from 'react'
import './services-styles.scss'
import LocalBarIcon from '@material-ui/icons/LocalBar';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import HotelIcon from '@material-ui/icons/Hotel';
import MovieIcon from '@material-ui/icons/Movie';

const Services = () => (
    <div className="services">
        <h1 className='title'>Our Services</h1>
            <div className="our-services">
                <div className="service-list">
                   
                        <LocalBarIcon color='action' fontSize='large' /> 
                    
                    
                    <p className="service-name">Free Cocktail</p>
                    <p className="service-details">Enjoy our varieties of assorted free cocktails</p>
                </div>
                <div className="service-list">
                    <HotelIcon color='action' fontSize='large' />
                    <p className="service-name">Hotel</p>
                    <p className="service-details">Enjoy best hotel services with luxury in mind</p>
                </div>
                <div className="service-list">
                    <AirportShuttleIcon color='action' fontSize='large' />
                    <p className="service-name">Free Shuttle</p>
                    <p className="service-details">Free Movement throughout the vicinity of the resort</p>
                </div>
                <div className="service-list">
                    <MovieIcon color='action' fontSize='large' />
                    <p className="service-name">Cinema</p>
                    <p className="service-details">Watch the latest movies in our cinema</p>
                </div>
           </div>
    </div>
);

export default Services