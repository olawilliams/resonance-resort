import React from 'react';
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { selectAllRooms } from '../../redux/rooms/room.selector'

import './roompage-styles.scss';

import roomBackground from '../../images/room-6.jpeg'
import Hero from '../../components/hero/hero-component'
import FeaturedRoomItem from '../../components/featured-room-item/featured-room-item-component'
import SliderSelect from '../../components/slider/slider-component'
import RadioSelect from '../../components/radio/radio-component'
import SelectOptions from '../../components/select/select-component'

const RoomPage = ({ rooms }) => {
return (
 
    <div className="room-page">       
      <Hero backgroundImage={roomBackground} text= 'Back to Home' title='Our Rooms' />

        <div className="search">
            <h1 className="title">Search Rooms</h1>

            <div className="search-parameters">
              < SelectOptions />
              <SliderSelect />
              <RadioSelect />
            </div>
         </div>

         <div className="rooms">
          {
            rooms.map(room => {
             return  <FeaturedRoomItem key={room.sys.id} fields={room.fields} />
            })
          }
         </div>
      </div>

)};

const mapState = createStructuredSelector({
  rooms: selectAllRooms
})

export default connect(mapState)(RoomPage);