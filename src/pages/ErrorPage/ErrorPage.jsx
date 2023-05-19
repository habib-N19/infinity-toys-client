import React from 'react'

const ErrorPage = () => {
  return (
    <div>
      404 Not found go back to{' '}
      <Link to='/' className='text-xl btn btn-primary'>
        Home
      </Link>
    </div>
  )
}

export default ErrorPage
