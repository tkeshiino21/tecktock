import React, { memo } from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room2.jpg";
import images1 from "../images/img4.jpg";
import { tsPropertySignature } from "@babel/types";
import items from '../data'

const Room = memo(({ room }) => {
  const { name, slug, price } = room;
  const images = item.fields.images.map(image => image.fields.file.url;
    return room;
  });
  return tempItems;
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[1] || defaultImg} alt="single room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
});

export default Room;
