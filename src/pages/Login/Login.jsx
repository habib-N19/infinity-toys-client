import React, { useContext } from 'react'
import { FaEnvelope, FaUserEdit, FaUserShield } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Providers/AuthProvider'
import SocialLogin from '../shared/SocialLogin/SocialLogin'
import { Helmet } from 'react-helmet'

const Login = () => {
  const { signInWithEmail } = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from.pathname || '/'
  const handleLogIn = event => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    signInWithEmail(email, password)
      .then(result => {
        const user = result.user
        console.log(user)
        navigate(from, { replace: true })
      })
      .catch(error => console.error(error))
  }
  return (
    <div className='w-9/12 md:w-1/3 mx-auto'>
      <Helmet>
        <title>Infinity | Login</title>
      </Helmet>
      <form onSubmit={handleLogIn} className='space-y-4'>
        {/* email */}

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
            value='Login'
            className='w-full text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2'
          />
        </div>
      </form>
      <div className='flex flex-col items-center justify-center'>
        <h3>
          New to <Link to='/'>Infinity Toys</Link>?
          <Link
            to='/register'
            className='underline decoration-sky-600 decoration-2 hover:decoration-blue-400'
          >
            Register Here
          </Link>
        </h3>
        <div className='divider'>OR</div>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  )
}

export default Login
