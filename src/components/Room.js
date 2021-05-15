import React from "react";
import { Link } from "react-router-dom";
import defaultIMG from "../images/room-1.jpeg";
import PropTypes from 'prop-types'
const Room = ({ room }) => {
  const { name, slug, images, price } = room;

  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultIMG} alt="single room"></img>
        <div className="price-top">
          <h6> ${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn btn-primary room-link">
          Features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
};
Room.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired,
        slug: PropTypes.string.isRequired
        
    })
}
export default Room;
