import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import React, { useEffect, useState } from 'react'
import 'react-tabs/style/react-tabs.css'
import { Link } from 'react-router-dom'

const SubCategory = () => {
  const [toyData, setToyData] = useState([])
  const [category, setCategory] = useState('iron-man')
  useEffect(() => {
    fetch(`http://localhost:5000/category?subCategory=${category}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setToyData(data)
      })
  }, [category])
  const handleCategory = data => {
    setCategory(data)
    // console.log(data)
  }
  return (
    <div className='w-10/12 mx-auto'>
      <h2 className='text-xl mb-4 '>Explore Toys from different category</h2>
      <Tabs>
        <TabList>
          <Tab onClick={() => handleCategory('iron-man')}>Iron Man</Tab>
          <Tab onClick={() => handleCategory('spider-man')}>Spider Man</Tab>
          <Tab onClick={() => handleCategory('thor')}>Thor</Tab>
        </TabList>

        <TabPanel>
          <div className='flex gap-4'>
            {toyData.map(t => (
              <div key={t._id}>
                <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                  <img
                    className='p-8 rounded-t-lg'
                    src={t.photo}
                    alt='product image'
                  />
                  <div className='px-5 pb-5'>
                    <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
                      {t.name}
                    </h5>
                    <div className='flex items-center mt-2.5 mb-5'>
                      {t.rating}
                    </div>
                    <div className='flex items-center justify-between'>
                      <span className='text-3xl font-bold text-gray-900 dark:text-white'>
                        ${t.price}
                      </span>
                      <Link
                        to={`/allToys/${t._id}`}
                        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className='flex gap-4'>
            {toyData.map(t => (
              <div key={t._id}>
                <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                  <img
                    className='p-8 rounded-t-lg'
                    src={t.photo}
                    alt='product image'
                  />
                  <div className='px-5 pb-5'>
                    <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
                      {t.name}
                    </h5>
                    <div className='flex items-center mt-2.5 mb-5'>
                      {t.rating}
                    </div>
                    <div className='flex items-center justify-between'>
                      <span className='text-3xl font-bold text-gray-900 dark:text-white'>
                        ${t.price}
                      </span>
                      <Link
                        to={`/allToys/${t._id}`}
                        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className='flex gap-4'>
            {toyData.map(t => (
              <div key={t._id}>
                <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                  <img
                    className='p-8 rounded-t-lg'
                    src={t.photo}
                    alt='product image'
                  />
                  <div className='px-5 pb-5'>
                    <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
                      {t.name}
                    </h5>
                    <div className='flex items-center mt-2.5 mb-5'>
                      {t.rating}
                    </div>
                    <div className='flex items-center justify-between'>
                      <span className='text-3xl font-bold text-gray-900 dark:text-white'>
                        ${t.price}
                      </span>
                      <Link
                        to={`/allToys/${t._id}`}
                        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default SubCategory
