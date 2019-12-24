import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

const Home = () => {
  return (
    <>
      <Hero hero="defaultHero">
        <Banner title="技術を重ねる" subtitle="Looking for TeckBook? Here is.">
          <Link to="/rooms" className="btn-primary">
            our books
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default Home;
