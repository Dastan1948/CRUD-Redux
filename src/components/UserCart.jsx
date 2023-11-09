import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser } from '../store/slices/userSlice'

const UserCart = ({ id, name, email }) => {
	const dispatch = useDispatch()

	const handleDelete = id => {
		dispatch(deleteUser(id))
	}

	return (
		<tr>
			<td>{id}</td>
			<td>{name}</td>
			<td>{email}</td>
			<td>
				<Link to={`/edit/${id}`} className='btn btn-sm btn-primary'>
					Edit
				</Link>
				<button
					onClick={e => handleDelete(id)}
					className='btn btn-sm btn-danger ms-2'
				>
					Delete
				</button>
			</td>
		</tr>
	)
}

export default UserCart
