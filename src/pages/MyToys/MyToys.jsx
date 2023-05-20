import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Providers/AuthProvider'
import MyToyCard from './MyToyCard'

const MyToys = () => {
  const { user } = useContext(AuthContext)
  const [myToys, setMyToys] = useState([])
  const url = `http://localhost:5000/myToys?email=${user.email}`
  useEffect(() => {
    fetch(url, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => setMyToys(data))
  }, [])
  return (
    <div>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                <span className='sr-only'>Image</span>
              </th>
              <th scope='col' className='px-1 py-3'>
                Toy Name
              </th>
              <th scope='col' className='px-1 py-3'>
                Seller
              </th>
              <th scope='col' className='px-2 py-3'>
                Sub Category
              </th>
              <th scope='col' className='px-2 py-3'>
                Price
              </th>
              <th scope='col' className='px-2 py-3'>
                Available Quantity
              </th>
              <th scope='col' className='px-6 py-3'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {myToys.map(myToy => (
              <MyToyCard key={myToy._id} myToy={myToy}></MyToyCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyToys
