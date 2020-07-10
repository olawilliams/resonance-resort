import React from 'react'
import { connect } from 'react-redux'
import { selectSingleRooms } from '../../redux/rooms/room.selector'

import './singleroom-page-styles.scss';

import BookingModal from '../../components/modal/modal-component'
import Hero from '../../components/hero/hero-component'

const SingleRoomPage = ({ singleRoom }) => {
    const { fields: { description, name, price, size, images, extras, pets, breakfast, capacity }} = singleRoom;
    const url = images[0].fields.file.url;
    
    
return (
    <div className="single-room">
      <Hero backgroundImage={url} text='Back to Rooms' title={name.toUpperCase()}/>
      
        <div className="room-images">
            {
                images.filter((fields, index) => index < 3)
                .map(({ fields: { file : { url }}} ) => 
                 <div className='img'><img className='room-image' src={ url } alt="room-page"/></div>
                 )
            }
            
        </div>

        <div className="details">
            <div className="description">
                <h2>Description</h2>
                <p>{description}</p>
            </div>
            <div className="info">
                <h2>Info</h2>
                <div className="info-details">
                    <div className="info-property">Price:</div>
                    <div className="info-value">${price}</div>
                </div>
                <div className="info-details">
                    <div className="info-property">Size:</div>
                    <div className="info-value">{size}</div>
                </div>
                <div className="info-details">
                    <div className="info-property">Capacity:</div>
                    <div className="info-value">{capacity}</div>
                </div>
                <div className="info-details-sc">
                    {breakfast ? 'Free breakfast Included' : ''}
                    
                </div>
                <div className="info-details-sc">
                    {pets ? 'Pets Allowed' : ''}
                   
                </div>
            </div>
        </div>

        <div className="extras">
            <h2>Extras</h2>
            <div className="extra-details">
                {
                    extras.map(extra => 
                        <div  className="extra-1">- {extra}</div>
                        )
                }
            </div>
        </div>
        <div className="book-btn">
            <BookingModal price={price}/>   
        </div>
    </div>
)};

const mapState = (state, ownProps) =>({
    singleRoom: selectSingleRooms(ownProps.match.params.roomId)(state)
})

export default connect(mapState)(SingleRoomPage)