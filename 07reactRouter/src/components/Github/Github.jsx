import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/raipranjal-2909')
    //   .then(response =>response.json())
    //   .then(data =>{
    //     console.log(data)
    //     setData(data)
    //   })
    // }, [])
    
  return (
    <div className='text-center bg-gray-600 text-white text-3xl p-4 m-4'>
      Github followers: {data.followers}
      <img src={data.avatar_url} alt='Git picture' width={300}></img>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/raipranjal-2909')
    return response.json()
}
