import React from 'react'
import { useLoaderData } from 'react-router-dom'

const ToyDetails = () => {
  const toyDetails = useLoaderData()
  const {
    photo,
    name,
    email,
    sellerName,
    sub_category,
    price,
    rating,
    quantity,
    details
  } = toyDetails
  console.log(toyDetails.name)
  return (
    <div>
      <div class='w-full max-w-sm mx-auto md:mt-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <img class='p-8 rounded-t-lg' src={photo} alt='product image' />

        <div class='px-5 pb-5'>
          <div>
            <h5 class='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
              {name}
            </h5>
            <small>Seller: {sellerName}</small>
            <div>{quantity}</div>
            <p>{details}</p>
          </div>

          <div class='flex items-center justify-between'>
            <span class='text-3xl font-bold text-gray-900 dark:text-white'>
              ${price}
            </span>
            <span class='text-3xl font-bold text-gray-900 dark:text-white'>
              {rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToyDetails
