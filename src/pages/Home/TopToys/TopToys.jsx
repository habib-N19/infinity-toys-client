import React from 'react'

const TopToys = () => {
  return (
    <div className='w-11/12 mx-auto my-20 '>
      <h1 className='text-2xl font-bold'>Here the Top Picks from your Store</h1>
      <div>
        <div className='card w-96 glass'>
          <figure>
            <img
              src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg'
              alt='car!'
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className='card-actions justify-end'>
              <button className='btn btn-primary'>Learn now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopToys
