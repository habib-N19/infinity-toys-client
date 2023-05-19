import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../Providers/AuthProvider'

const MyToys = () => {
  const { user } = useContext(AuthContext)
  const url = `http://localhost:5000/myToys?email=${user.email}`
  useEffect(() => {
    fetch(url, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])
  return (
    <div>
      <div class='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table class='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' class='px-6 py-3'>
                <span class='sr-only'>Image</span>
              </th>
              <th scope='col' class='px-6 py-3'>
                Product
              </th>
              <th scope='col' class='px-6 py-3'>
                Qty
              </th>
              <th scope='col' class='px-6 py-3'>
                Price
              </th>
              <th scope='col' class='px-6 py-3'>
                Action
              </th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  )
}

export default MyToys
