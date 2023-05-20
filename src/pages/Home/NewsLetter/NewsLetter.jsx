import React from 'react'

const NewsLetter = () => {
  return (
    <div
      data-aos='fade-up'
      className='grid grid-cols-1 md:grid-cols-2 w-11/12 md:w-10/12 mx-auto border border-gray-600 rounded-lg shadow-lg py-10 px-3'
    >
      <div>
        <h3 className='text-2xl text-white text-center mb-6'>
          Subscribe to newsletter <br /> and{' '}
          <span className='text-purple-400 font-bold'>get -20% off</span>
        </h3>
        <form>
          <div className='relative'>
            <input
              type='email'
              className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='name@email.com'
              required
            />
            <button
              type='submit'
              className='text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
      <div className='hidden'>img</div>
    </div>
  )
}

export default NewsLetter
