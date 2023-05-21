import React, { useEffect } from 'react'

const Gallery = () => {
  return (
    <div>
      <div className='grid grid-cols-2 my-10 md:grid-cols-4 w-11/12 mx-auto gap-4'>
        <div className='grid gap-4'>
          <div data-aos='fade-right'>
            <img
              className='h-auto max-w-full rounded-lg'
              src=' https://i.ibb.co/fN4Y1Td/image.png'
              alt=''
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://i.ibb.co/mzbvqhP/image.png'
              alt=''
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://i.ibb.co/87KfdbN/image.png'
              alt=''
            />
          </div>
        </div>
        <div className='grid gap-4'>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://i.ibb.co/6wcKVVG/image.png'
              alt=''
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://i.ibb.co/f1G3Hrp/image.png'
              alt=''
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://i.ibb.co/P5MxHwV/image.png'
              alt=''
            />
          </div>
        </div>
        <div className='grid gap-4'>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://i.ibb.co/H4CBkSy/image.png'
              alt=''
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://i.ibb.co/pyqKBzL/image.png'
              alt=''
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://i.ibb.co/ccwYfy5/image.png'
              alt=''
            />
          </div>
        </div>
        <div className='grid gap-4'>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://i.ibb.co/P5MxHwV/image.png'
              alt=''
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://i.ibb.co/L0pXRWr/image.png'
              alt=''
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://i.ibb.co/thFRChk/image.png'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
