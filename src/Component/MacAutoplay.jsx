import React from "react";
import ReactPlayer from "react-player";

class MacAutoplay extends React.Component {
  render() {
    const shouldLoop = true;
    return (
      <div className="h-screen w-full ">
        <ReactPlayer
          className=""
          url="https://youtu.be/0okuAwqTHs0?si=12DjRAQ7fRxEKbNS"
          loop={shouldLoop}
          playing={true} 
          controls={true} 
          width="100%"
          height="100%"
        />
      </div>
    );
  }
}

export default MacAutoplay;
