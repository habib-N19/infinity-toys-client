import { Link } from 'react-router-dom'

const ToyCard = ({ toy }) => {
  const { _id, name, sellerName, sub_category, price, quantity } = toy
  return (
    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
      <td className='px-6 py-4'> {sellerName}</td>
      <td className='px-6 py-4'>{name}</td>
      <td className='px-6 py-4'>{sub_category}</td>
      <td className='px-6 py-4'>{price}</td>
      <td className='px-6 py-4'>{quantity}</td>
      <td className='px-6 py-4'>
        <Link
          to={`/allToys/${_id}`}
          type='button'
          className='btn font-medium text-blue-600 dark:text-blue-500 '
        >
          View Details
        </Link>
      </td>
    </tr>
  )
}

export default ToyCard
