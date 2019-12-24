import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import defaultBcg from "../images/room1.jpg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { RoomContext } from "../context/context";
import StyledHero from "../components/StyledHero";

const SingleRoom = () => {
  const roomContext = useContext(RoomContext);
  console.log(roomContext);
  const [state, setState] = useState({
    slug: roomContext.match.params.slug,
    defaultBcg,
  });
  const { getRoom } = RoomContext.getRoom;
  const room = getRoom(state.slug);
  const [mainImg, ...defaultImg] = images;
  console.log(defaultImg);
  if (!room) {
    return (
      <>
        <StyledHero img={mainImg || state.defaultBcg}>
          <div className="error">
            <h3>no such room could be found...</h3>
            <Link to="/rooms" className="btn-primary">
              back to Rooms
            </Link>
          </div>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-image">
            {images.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return;
            })}
          </ul>
        </section>
      </>
    );
  }
  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;
  return (
    <Hero hero="roomsHero">
      <Banner title={`${name} room`}>
        <Link to="/rooms" className="btn-primary">
          Back to Rooms
        </Link>
      </Banner>
      <div>hello from single room{room.name}</div>
    </Hero>
  );
};

export default SingleRoom;
