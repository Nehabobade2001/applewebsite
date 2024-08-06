import React, { useEffect, useRef } from "react";
import ReactPlayer from "react-player";

class AutoPlaye extends React.Component {
  render() {
    const shouldLoop = true;
    return (
      <div className="h-screen w-full " >
        <ReactPlayer
         className=""
          url="https://youtu.be/FT3ODSg1GFE?si=HdFdxWeYud22gCMV"
          loop={shouldLoop}
          playing={true} // Set it to true if you want the video to start playing automatically
          controls={true}
          width="100%"
          height="100%" // Set it to true if you want video controls
         />
      </div>
    );
  }
}


export default AutoPlaye;
