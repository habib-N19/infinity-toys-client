import React from 'react'
import { Link } from 'react-router-dom'
const MyToyCard = ({ myToy, handleToyDelete }) => {
  const { _id, name, sellerName, subCategory, price, quantity, photo } = myToy

  return (
    <>
      <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
        <td className='w-32 p-4'>
          <img src={photo} alt='Toy' />
        </td>
        <td className='px-1 py-4 font-semibold text-gray-900 dark:text-white'>
          {name}
        </td>
        <td className='px-1 py-4 font-semibold text-gray-900 dark:text-white'>
          {sellerName}
        </td>
        <td className='px-1 py-4'>{subCategory}</td>
        <td className='px-1 py-4 font-semibold text-gray-900 dark:text-white md:text-lg'>
          ${price}
        </td>
        <td className='px-1 py-4 font-semibold text-gray-900 dark:text-white md:text-lg'>
          {quantity}
        </td>
        <td className='px-0 py-4'>
          <Link to={`/myToys/${_id}`}>
            <button className='btn btn-success mr-3'>Update</button>
          </Link>
          <button
            onClick={() => handleToyDelete(_id)}
            className='btn btn-warning px-6'
          >
            x
          </button>
        </td>
      </tr>
    </>
  )
}

export default MyToyCard
