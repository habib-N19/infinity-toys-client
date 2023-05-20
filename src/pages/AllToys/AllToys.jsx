import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import ToyCard from './ToyCard'
import { Helmet } from 'react-helmet'

const AllToys = () => {
  const allToys = useLoaderData()
  const [search, setSearch] = useState('')
  const [toys, setToys] = useState(allToys)

  const handleSearch = () => {
    if (search.trim() !== '') {
      fetch(`http://localhost:5000/searchToy/${search}`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setToys(data)
        })
    } else {
      setToys(allToys)
    }
  }
  return (
    <div>
      <Helmet>
        <title>Infinity | All Toys</title>
      </Helmet>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <div className=' p-2 text-center'>
          <input
            onChange={e => setSearch(e.target.value)}
            type='text'
            className='input input-accent mr-2 w-full max-w-xs'
          />
          <button className='btn btn-accent' onClick={handleSearch}>
            Search
          </button>
        </div>
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
