import React, { useContext } from "react";
import { RoomContext } from "../context/context";
import Room from "./Room";

const RoomList = () => {
  const roomContext = useContext(RoomContext);
  if (roomContext.rooms.length === 0) {
    return (
      <div className="empty-serarch">
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="roomsList">
      <div className="roomlist-center">
        {roomContext.rooms.map(item => {
          return <Room key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
};

export default RoomList;
