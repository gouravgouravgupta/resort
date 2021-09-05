import React from "react";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer";

export default function Rooms() {
  return (
    <>
    <Hero hero="roomsHero">
      <Banner title="rooms">
        <Link to="/" className="btn-primary">
          return to home
        </Link>
      </Banner>
    </Hero>
    <RoomsContainer />
    </>

  );
}
