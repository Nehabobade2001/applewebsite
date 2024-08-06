
import React, { useState } from 'react';

export default function IpaidImages  ()  {
    const [currentImage, setCurrentImage] = useState("");
    const handleClick = () => {
        setCurrentImage(currentImage === 1 ? 2 : 1 );
      };
  return (
    <div className='h-1/2 w-full '>
      <img className='h-full w-full' 
        src={currentImage === 1 ? 'https://images.unsplash.com/photo-1514826786317-59744fe2a548?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHw%3D&w=1000&q=80' : 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP882/ipad-pro-4gen-mainimage.png'}
        alt="Displayed Image"
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
      />
    </div>
  )
}

