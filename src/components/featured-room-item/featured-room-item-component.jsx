import React from 'react';
import { withRouter } from 'react-router-dom'
import './featured-room-item-styles.scss'

const FeaturedRoomItem = ({ history, fields : { name, price, slug, images}}) => {
return ( 
    <div className="featured-room">
        <div className='image' >
            <img className='image' src={images[0].fields.file.url} alt=""/>
        </div>
        <div className="price">{`$${price}/night`}</div>
        <button className='featured-btn' onClick={() => history.push(`/rooms/${slug}`)}>features</button>
        <div className="name">

         {name}
        </div>
    </div>       
 )};

export default withRouter(FeaturedRoomItem);