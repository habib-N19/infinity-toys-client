import React from 'react'

const TopToys = () => {
  return (
    <div className='w-11/12 mx-auto my-20'>
      <h1 className='text-2xl font-bold'>
        Here are the Top Picks from your Store
      </h1>
      <div className='carousel w-full h-[300px]'>
        <div id='item1' className='carousel-item w-full'>
          <img
            src='https://i.ibb.co/P5MxHwV/image.png'
            className='mx-auto h-full'
          />
        </div>
        <div id='item2' className='carousel-item w-full'>
          <img
            src='https://i.ibb.co/H4CBkSy/image.png'
            className='mx-auto h-full'
          />
        </div>
        <div id='item3' className='carousel-item w-full'>
          <img
            src='https://i.ibb.co/ccwYfy5/image.png'
            className='mx-auto h-full'
          />
        </div>
        <div id='item4' className='carousel-item w-full'>
          <img
            src='https://i.ibb.co/f1G3Hrp/image.png'
            className='mx-auto h-full'
          />
        </div>
      </div>
      <div className='flex justify-center w-full py-2 gap-2'>
        <a href='#item1' className='btn btn-xs'>
          1
        </a>
        <a href='#item2' className='btn btn-xs'>
          2
        </a>
        <a href='#item3' className='btn btn-xs'>
          3
        </a>
        <a href='#item4' className='btn btn-xs'>
          4
        </a>
      </div>
    </div>
  )
}

export default TopToys
