import React from "react";
import Container from "../component/container";
import Hero from "../assets/Landing.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Container>
        <div className="smscren-btn">
          <Link to="/create">
            <button className="button">🎉 Create my event</button>
          </Link>
        </div>
        <img src={Hero} className="hero-img" />
        <div className="text item-center">
          <h1 className="heading">
            Imagine if <br /> <span className="fancy">Snapchat</span>
            <br />
            had events.
          </h1>
          <p className="para-text">
            Easily host and share events with your friends <br /> across any
            social media.
          </p>
          <div className="lgscren-btn">
            <Link to="/create">
              <button className="button">🎉 Create my event</button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
