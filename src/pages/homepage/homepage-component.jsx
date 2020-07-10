import React from 'react';
import './homepage-styles.scss'

import background from '../../images/defaultBcg.jpeg'
import FeaturedRooms from '../../components/featured-rooms/featured-rooms.component'
import Hero from '../../components/hero/hero-component'
import Services from '../../components/services/services-component'

const HomePage = () =>  (
    <div className="homepage">
        <Hero backgroundImage={background} text='Our Rooms' title=' Resonance Resort'/>
        <Services />

        <FeaturedRooms />
    </div>
);

export default HomePage;