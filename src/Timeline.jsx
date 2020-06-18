import React from "react";

const Timeline = (props) => {
  return props.chirps.map((chirp, id) => {
    return (
      <div>
        <h1>{chirp.name}</h1>
        <p>{chirp.message}</p>
      </div>
    );
  });
};

export default Timeline;
