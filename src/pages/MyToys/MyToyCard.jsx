import React from 'react'

const MyToyCard = () => {
  return (
    <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
      <td class='w-32 p-4'>
        <img src='/docs/images/products/apple-watch.png' alt='Apple Watch' />
      </td>
      <td class='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
        Apple Watch
      </td>
      <td class='px-6 py-4'></td>
      <td class='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
        $599
      </td>
      <td class='px-6 py-4'>
        <a
          href='#'
          class='font-medium text-red-600 dark:text-red-500 hover:underline'
        >
          Remove
        </a>
      </td>
    </tr>
  )
}

export default MyToyCard
