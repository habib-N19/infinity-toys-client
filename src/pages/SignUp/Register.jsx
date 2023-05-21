import React, { useContext } from 'react'
import { FaEnvelope, FaImage, FaUserEdit, FaUserShield } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Providers/AuthProvider'
import SocialLogin from '../shared/SocialLogin/SocialLogin'
import { Helmet } from 'react-helmet'
const Register = () => {
  const { createUserWithEmail, logOut } = useContext(AuthContext)
  const navigate = useNavigate()
  const handleSignUp = event => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    createUserWithEmail(email, password)
      .then(result => {
        const user = result.user
        console.log(user)
        logOut()
        navigate('/login')
      })
      .catch(error => console.error(error))
  }
  return (
    <div className='w-1/2 mx-auto'>
      <Helmet>
        <title>Infinity | Register</title>
      </Helmet>
      <form onSubmit={handleSignUp} className='space-y-4'>
        {/* name */}
        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
          Your Name
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <FaUserEdit></FaUserEdit>
          </div>
          <input
            type='text'
            name='name'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='name'
          />
        </div>
        {/* name */}
        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
          Your Photo Url
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <FaImage></FaImage>
          </div>
          <input
            type='text'
            name='photoUrl'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='photo url'
          />
        </div>
        {/* email */}
        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
          Your Email
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <FaEnvelope></FaEnvelope>
          </div>
          <input
            type='email'
            name='email'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='name@email.com'
          />
        </div>
        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
          Your Password
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <FaUserShield></FaUserShield>
          </div>
          <input
            type='password'
            name='password'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='enter at least 6 character password'
          />
        </div>
        <div className='w-full'>
          <input
            type='submit'
            value='Register'
            className='w-full text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2'
          />
        </div>
      </form>
      <div className='flex flex-col items-center justify-center'>
        <h3>
          Already have an account?{' '}
          <Link
            to='/login'
            className='underline decoration-sky-600 decoration-2 hover:decoration-blue-400'
          >
            Login Here
          </Link>
        </h3>
        <div className='divider'>OR</div>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  )
}

export default Register
