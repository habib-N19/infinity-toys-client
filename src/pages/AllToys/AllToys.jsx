import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ToyCard from './ToyCard'

const AllToys = () => {
  const toys = useLoaderData()
  console.log(toys)
  return (
    <div>
      {toys.map(toy => (
        <ToyCard key={toy._id} toy={toy}></ToyCard>
      ))}
    </div>
  )
}

export default AllToys
