import React, { useContext } from "react";
import Loading from "./Loading";
import Title from "./Title";
import { RoomContext } from "../context/context";
import Room from "./Room";

const FeaturedRooms = () => {
  const roomContext = useContext(RoomContext);
  const rooms = roomContext.featuredRooms.map(room => {
    return <Room key={room.id} room={room} />;
  });

  return (
    <RoomContext.Provider>
      <section className="featured-rooms">
        <Title title="feauturedRooms" />
        <div className="featured-rooms-center">
          {roomContext.isLoading ? <Loading /> : rooms}
        </div>
      </section>
    </RoomContext.Provider>
  );
};

export default FeaturedRooms;
