import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ToyCard from './ToyCard'

const AllToys = () => {
  const toys = useLoaderData()
  console.log(toys)
  return (
    <div>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Seller
              </th>
              <th scope='col' className='px-6 py-3'>
                Toy Name
              </th>
              <th scope='col' className='px-6 py-3'>
                Sub Category
              </th>
              <th scope='col' className='px-6 py-3'>
                Price
              </th>
              <th scope='col' className='px-6 py-3'>
                Available Quantity
              </th>
              <th scope='col' className='px-6 py-3'>
                View Details
              </th>
            </tr>
          </thead>
          <tbody>
            {toys.map(toy => (
              <ToyCard key={toy._id} toy={toy}></ToyCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllToys
