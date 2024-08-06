import React, { Fragment } from 'react'


export default function HomeSlider ({value,i})  {
  return (
    <Fragment>
        <div className=' bg-red-600 lg:h-full lg:w-full '>
              {/* <img className='w-full h-full' src="https://media.istockphoto.com/photos/montage-of-cricket-players-hitting-cricket-balls-in-outdoor-stadium-picture-id1276613883?b=1&k=20&m=1276613883&s=170667a&w=0&h=uFw2EUPaJ-wq9AJvmFM0mLEjkDmarvLW1KE8pVd1lWQ=" alt="" />   */}
              <img className='lg:w-full lg:h-full'  src={value?.image} alt="" />
        </div>

    </Fragment>
  )
}

