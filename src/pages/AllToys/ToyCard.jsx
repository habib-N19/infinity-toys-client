import { useState } from 'react'
import { Link } from 'react-router-dom'

const ToyCard = ({ toy }) => {
  const { name, sellerName, sub_category, price, quantity } = toy
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

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
            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
              <td className='px-6 py-4'> {sellerName}</td>
              <td className='px-6 py-4'>{name}</td>
              <td className='px-6 py-4'>{sub_category}</td>
              <td className='px-6 py-4'>{price}</td>
              <td className='px-6 py-4'>{quantity}</td>
              <td className='px-6 py-4'>
                <Link
                  to={`/allToys/:id`}
                  type='button'
                  onClick={openModal}
                  className='btn font-medium text-blue-600 dark:text-blue-500 '
                >
                  View Details
                </Link>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Edit user modal */}
        <div
          id='editUserModal'
          tabIndex='-1'
          aria-hidden='true'
          className={`fixed top-0 left-0 right-0 z-50 items-center justify-center ${
            showModal ? 'flex' : 'hidden'
          } w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
        >
          <div className='relative w-full max-w-2xl max-h-full'>
            {/* Modal content */}
            <form className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
              {/* Modal header */}
              <div className='flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600'>
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                  Edit user
                </h3>
                <button
                  type='button'
                  onClick={closeModal}
                  className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
                  data-modal-hide='editUserModal'
                >
                  (your svg)
                </button>
              </div>
              {/* Modal body */}
              <div className='p-6 space-y-6'></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToyCard
