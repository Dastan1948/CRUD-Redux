import React from 'react'
import { Link } from 'react-router-dom'

const Title = () => {
  return (
    <>
      <h2 className='text-center my-4'>CRUD App with Redux Toolkit</h2>
			<Link to='/create' className='btn btn-success my-3'>
				Create +
			</Link>
    </>
  )
}

export default Title