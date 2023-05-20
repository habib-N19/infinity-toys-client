import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import React, { useEffect, useState } from 'react'
import 'react-tabs/style/react-tabs.css'

const SubCategory = () => {
  const [selectedTab, setSelectedTab] = useState(0)
  const [toyData, setToyData] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/allToys?subcategory=${selectedTab}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setToyData(data)
      })
  }, [])
  const handleTab = index => {
    setSelectedTab(index)
  }
  return (
    <div>
      <Tabs onSelect={handleTab} selectedIndex={selectedTab}>
        <TabList>
          <Tab value={'marvelss'}>marvel</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default SubCategory
