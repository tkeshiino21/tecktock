import React, { createContext, useState } from "react";
import items from "../data";
import Client from "../Contentful";

export const RoomContext = createContext();

const rooms = items => {
  let tempItems = items.map(item => {
    let id = item.sys.id;
    let images = item.fields.images.map(image => image.fields.file.url);
    let room = { ...item.fields, images, id };
    return room;
  });
  return tempItems;
};

const RoomProvider = props => {
  const [state, setState] = useState({
    rooms: [items[1], items[2], 3],
    sortedRooms: [],
    featuredRooms: [1, 2, 3],
    loading: true,
    //
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  });

  const getRoom = slug => {
    let tempRooms = [...state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };

  const handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name, value);
    setState(
      {
        [name]: value,
      },
      filterRooms
    );
  };

  const filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets,
    } = state;

    let tempRooms = [...rooms];
    // transform values
    // get capacity
    capacity = parseInt(capacity);
    price = parseInt(price);
    // filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter(room => room.type === type);
    }
    // filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity);
    }
    // filter by price
    tempRooms = tempRooms.filter(room => room.price <= price);
    //filter by size
    tempRooms = tempRooms.filter(
      room => room.size >= minSize && room.size <= maxSize
    );
    //filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true);
    }
    //filter by pets
    if (pets) {
      tempRooms = tempRooms.filter(room => room.pets === true);
    }
    setState({
      sortedRooms: tempRooms,
    });
  };

  return (
    <RoomContext.Provider
      value={{
        ...state,
        getRoom: getRoom,
        handleChange: handleChange,
      }}>
      {props.children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
