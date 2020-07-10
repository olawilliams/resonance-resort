import React from 'react';
import './featured-rooms-styles.scss';
import FeaturedRoomItem from '../featured-room-item/featured-room-item-component'
import DATA_JS from '../../data'

const FeaturedRooms = () => {
    const rooms = DATA_JS
return (
    <div className="featured">
            <h1 className='title'>Featured Rooms</h1>
            <div className="featured-lists">
                {
                    rooms.filter((room, index) => index < 3 )
                        .map(room => 
                            <FeaturedRoomItem key={room.sys.id} fields={room.fields} />    
                        )
                }
           </div>
    </div>
)};

export default FeaturedRooms;