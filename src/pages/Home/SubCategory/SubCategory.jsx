import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import React, { useEffect, useState } from 'react'
import 'react-tabs/style/react-tabs.css'

const SubCategory = () => {
  const [toyData, setToyData] = useState([])
  const [category, setCategory] = useState('marvel')
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
    <div>
      <Tabs>
        <TabList>
          <Tab onClick={() => handleCategory('marvel')}>Marvel</Tab>
          <Tab onClick={() => handleCategory('marvel')}>Marvel</Tab>
          <Tab onClick={() => handleCategory('marvelss')}>Marvel</Tab>
        </TabList>

        <TabPanel>
          <h2>
            {toyData.map(t => (
              <p key={t._id}>{t.name}</p>
            ))}
          </h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
          {toyData.map(t => (
            <p key={t._id}>{t.sellerName}</p>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
          {toyData.map(t => (
            <p key={t._id}>{t.price}</p>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default SubCategory
