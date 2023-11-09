import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../store/slices/userSlice'
import { useNavigate } from 'react-router-dom'

const Create = () => {
	const [user, setUser] = useState({
    name: '',
    email: ''
  })

  const { users } = useSelector(state => state.users)
	const dispatch = useDispatch()

	const navigate = useNavigate()

	const handleSubmit = e => {
		e.preventDefault()

    let obj = {
      id: users[users.length - 1].id + 1,
      name: user.name,
      email: user.email
    }

		dispatch(addUser(obj))

    navigate('/')
	}

	return (
		<div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
			<div className='w-50 border bg-secondary text-white p-5'>
				<h3>Add New User</h3>
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor='name'>Name:</label>
						<input
							type='text'
							name='name'
							className='form-control'
							placeholder='enter name'
              value={user.name}
							onChange={e => setUser({...user, name: e.target.value})}
						/>
					</div>
					<div>
						<label htmlFor='email'>Email:</label>
						<input
							type='text'
							name='email'
							className='form-control'
							placeholder='enter email'
              value={user.email}
							onChange={e => setUser({...user, email: e.target.value})}
						/>
					</div>
					<br />
					<button className='btn btn-info'>Submit</button>
				</form>
			</div>
		</div>
	)
}

export default Create
