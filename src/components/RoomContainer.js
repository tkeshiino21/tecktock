import React, { useContext } from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import { RoomContext } from "../context/context";
import Loading from "./Loading";

const RoomContainer = () => {
  const roomContext = useContext(RoomContext);
  return (
    <>
      <div>
        {() => {
          if (roomContext.isLoading) {
            return <Loading />;
          }
        }}
      </div>
      <div>
        <div>hello from rooms Container</div>
        <RoomFilter rooms={roomContext.rooms} />
        <RoomList rooms={roomContext.sortedRooms} />
      </div>
    </>
  );
};

export default RoomContainer;
