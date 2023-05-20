import React from 'react'

const MyToyCard = ({ myToy }) => {
  const { _id, name, sellerName, sub_category, price, quantity, photo } = myToy

  const handleToyDelete = id => {
    fetch(`http://localhost:5000/myToys/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }
  return (
    <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
      <td class='w-32 p-4'>
        <img src={photo} />
      </td>
      <td class='px-1 py-4 font-semibold text-gray-900 dark:text-white'>
        {name}
      </td>
      <td class='px-1 py-4 font-semibold text-gray-900 dark:text-white'>
        {sellerName}
      </td>
      <td class='px-1 py-4'>{sub_category}</td>
      <td class='px-1 py-4 font-semibold text-gray-900 dark:text-white md:text-lg'>
        ${price}
      </td>
      <td class='px-1 py-4 font-semibold text-gray-900 dark:text-white md:text-lg'>
        {quantity}
      </td>
      <td class='px-0 py-4'>
        <button className='btn btn-success mr-3'>Update</button>
        <button
          onClick={() => handleToyDelete(_id)}
          className='btn btn-warning px-6'
        >
          x
        </button>
      </td>
    </tr>
  )
}

export default MyToyCard
