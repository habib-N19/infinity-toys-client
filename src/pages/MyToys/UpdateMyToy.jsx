import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'

const UpdateMyToy = () => {
  const toy = useLoaderData()
  console.log(toy)
  const { _id, price, quantity, details } = toy
  //   handle update a toy options
  const handleUpdate = event => {
    event.preventDefault()
    const form = event.target
    const price = form.price.value
    const quantity = form.quantity.value
    const details = form.details.value
    const updatedToy = {
      price,
      quantity,
      details
    }

    fetch(`http://localhost:5000/myToys/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedToy)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Toy Updated successfully',
            icon: 'success',
            confirmButtonText: 'Okay'
          })
        }
      })
  }
  return (
    <div className=' w-11/12 md:w-1/2 lg:w-1/3 mx-auto mt-20'>
      <form onSubmit={handleUpdate}>
        <div className='grid md:grid-cols-2 md:gap-6'>
          <div className='relative z-0 w-full mb-6 group'>
            <input
              type='number'
              name='price'
              defaultValue={price}
              id='floating_rating'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
              required
            />
            <label
              htmlFor='floating_rating'
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Price
            </label>
          </div>
          <div className='relative z-0 w-full mb-6 group'>
            <input
              type='number'
              name='quantity'
              defaultValue={quantity}
              id='floating_quantity'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
              required
            />
            <label
              htmlFor='floating_quantity'
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Available Quantity
            </label>
          </div>
        </div>
        <div className='relative z-0 w-full mb-6 group'>
          <h2 className='mb-3'>Detailed Description about the toy</h2>
          <textarea
            name='details'
            defaultValue={details}
            rows='4'
            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder=''
          ></textarea>
        </div>
        <input
          type='submit'
          value='Update toy'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        />
      </form>
    </div>
  )
}

export default UpdateMyToy
