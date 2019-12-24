import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import RoomProvider from "./context/context";
import FeaturedRooms from "./components/FeaturedRooms";

const App = props => {
  let content = <Rooms />;
  // if (roomContext.pets) {
  //   content = <FeaturedRooms />;
  // }
  return (
    <RoomProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/single/:slug" component={SingleRoom} />
          <Route exact path="/rooms/" component={Rooms} />
          <Route component={Error} />
        </Switch>
      </Router>
    </RoomProvider>
  );
};

export default App;
