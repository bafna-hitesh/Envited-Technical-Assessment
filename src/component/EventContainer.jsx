import React from "react";

const EventContainer = ({ children }) => {
  return (
    <div className="container event-container flex justify-btwn">
      {children}
    </div>
  );
};

export default EventContainer;
