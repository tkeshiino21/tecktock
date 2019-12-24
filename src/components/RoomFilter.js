import React, { useContext } from "react";
import { RoomContext } from "../context/context";
import Title from "./Title";

const getUnique = (items, value) => {
  return [...items.map(item => item[value])];
};

const RoomFilter = ({ rooms }) => {
  const roomContext = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
    option,
  } = roomContext;

  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  types = types.map((item, index) => {
    return option;
  });
  let people = getUnique(rooms);
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });
  return (
    <>
      <section className="filter-container">
        <Title tiltle="search rooms" />
        <form className="filter-form">
          <div className="form-group">
            <label htmlFor="type" className="">
              room type
            </label>
            <select
              name="capacity"
              id="capacity"
              value={capacity}
              className="form-control"
              onChange={handleChange}>
              {people}
            </select>
          </div>
        </form>
        <form>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
          <label htmlFor="price">room price ${price}</label>
        </form>
        <form>
          <input
            type="number"
            name="minSize"
            value={minSize}
            onChange={handleChange}
            className="size-input"
          />
          <input
            type="number"
            name="maxSize"
            value={maxSize}
            onChange={handleChange}
            className="size-input"
          />
          <input
            type="checkbox"
            name="breackfast"
            id="breakfast"
            checked={breakfast}
            onChane={handleChange}
          />

          <label htmlFor="breakfast">breakfast</label>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChane={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </form>
      </section>
      <div>hello from roomfilter</div>
    </>
  );
};

export default RoomFilter;
