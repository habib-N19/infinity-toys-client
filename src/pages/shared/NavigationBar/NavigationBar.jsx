import React, { useContext } from 'react'
import { AuthContext } from '../../../Providers/AuthProvider'
import { Link } from 'react-router-dom'
import '../../../index.css'
import { FaBars } from 'react-icons/fa'
import logo from '../../../assets/logo.png'
const NavigationBar = () => {
  const { logOut } = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
  }
  const navBarItems = (
    <>
      <li>
        <Link
          className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'
          to='/'
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
          to='/allToys'
        >
          All Toys
        </Link>
      </li>
      <li>
        <Link
          className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
          to='/myToys'
        >
          My Toys
        </Link>
      </li>
      <li>
        <Link
          className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
          to='/addNewToy'
        >
          Add a Toy
        </Link>
      </li>
      <li>
        <Link
          className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
          to='/blog'
        >
          Blogs
        </Link>
      </li>
    </>
  )
  return (
    <div>
      <nav className='bg-white dark:bg-gray-800 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <Link to='/' className='flex items-center'>
            <img src={logo} className='h-12  mr-3' alt='infinity Logo' />
            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
              Infinity Toy Store
            </span>
          </Link>
          <div className='flex md:order-2'>
            <img
              className='w-10 h-10 mr-2 rounded-full'
              src='https://flowbite.com/docs/images/logo.svg'
              alt='user photo'
            />

            <button
              onClick={handleLogOut}
              type='button'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Log Out
            </button>
            <div className='dropdown w-full'>
              <label tabIndex={0} className='btn btn-ghost md:hidden'>
                <FaBars></FaBars>
              </label>
              {/* <ul
                tabIndex={0}
                className=' dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
              >
                {navBarItems}
              </ul> */}
            </div>
          </div>
          <div
            className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
            id='navbar-sticky'
          >
            <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700'>
              {navBarItems}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavigationBar
