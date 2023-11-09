import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../store/slices/userSlice'

const Update = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {users} = useSelector(state => state.users)
  const findUser = users.filter(user => user.id == id)
  const {name, email} = findUser[0]

  const [updateNewUser, setUpdateNewUser] = useState({
    name,
    email
  })

  const handleSubmit = e => {
    e.preventDefault()

    let obj = {
      id,
      name: updateNewUser.name,
      email: updateNewUser.email
    }

    dispatch(updateUser(obj))

    navigate('/')
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
			<div className='w-50 border bg-secondary text-white p-5'>
				<h3>Update User</h3>
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor='name'>Name:</label>
						<input
							type='text'
							name='name'
							className='form-control'
							placeholder='enter name'
              value={updateNewUser.name}
              onChange={e => setUpdateNewUser({...updateNewUser, name: e.target.value})}
						/>
					</div>
					<div>
						<label htmlFor='email'>Email:</label>
						<input
							type='text'
							name='email'
							className='form-control'
							placeholder='enter email'
              value={updateNewUser.email}
              onChange={e => setUpdateNewUser({...updateNewUser, email: e.target.value})}
						/>
					</div>
					<br />
					<button className='btn btn-info'>Update</button>
				</form>
			</div>
		</div>
  )
}

export default Update