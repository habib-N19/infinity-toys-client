import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Providers/AuthProvider'
import MyToyCard from './MyToyCard'
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet'

const MyToys = () => {
  const { user } = useContext(AuthContext)
  const [myToys, setMyToys] = useState([])
  const [sort, setSort] = useState('')
  useEffect(() => {
    const url = `http://localhost:5000/myToys?email=${user.email}&sort=${sort}`
    fetch(url, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        setMyToys(data)
        console.log(data)
      })
  }, [user.email, sort])

  //   deleting a item and updating the site without reloading it
  const handleToyDelete = id => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      })
      .then(result => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/myToys/${id}`, {
            method: 'DELETE'
          })
            .then(res => res.json())
            .then(data => {
              console.log(data)
              if (data.deletedCount > 0) {
                swalWithBootstrapButtons.fire(
                  'Deleted!',
                  'Your toy has been deleted.',
                  'success'
                )
                const remaining = myToys.filter(myToy => myToy._id !== id)
                setMyToys(remaining)
              }
            })
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Toy deletion is cancelled ',
            'error'
          )
        }
      })
  }
  //   sorting
  const handleSortAscending = () => {
    setSort('asc')
  }
  const handleSortDescending = () => {
    setSort('des')
  }
  return (
    <div>
      <Helmet>
        <title>Infinity | MyToys</title>
      </Helmet>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <div className='dropdown dropdown-hover ml-10 my-5'>
          <label tabIndex={0} className='btn'>
            Sort
          </label>
          <ul
            tabIndex={0}
            className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <button className='' onClick={handleSortDescending}>
                By price descending
              </button>
            </li>
            <li>
              <button className='' onClick={handleSortAscending}>
                By price ascending
              </button>
            </li>
          </ul>
        </div>
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
              <MyToyCard
                key={myToy._id}
                myToy={myToy}
                handleToyDelete={handleToyDelete}
              ></MyToyCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyToys
