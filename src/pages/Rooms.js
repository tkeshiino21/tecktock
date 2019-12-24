import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import defaultImg from "../images/room1.jpg";
import { RoomContext } from "../context/context";
import images0 from "../images/img6.jpg";
import RoomContainer from "../components/RoomContainer";

const Rooms = ({ room }) => {
  const roomContext = useContext(RoomContext);
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Let's borrow and read">
          <Link to="/" className="btn-primary">
            Back to Top
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </>
  );
};

export default Rooms;
