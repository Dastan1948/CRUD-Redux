import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../store/slices/userSlice'

const Create = () => {
	const { users } = useSelector(state => state.users)
	const dispatch = useDispatch()

	const navigate = useNavigate()

	const {
		register,
		formState: { errors, isValid },
		handleSubmit
	} = useForm({
		mode: 'onBlur',
	})

	const onSubmit = data => {

		data = {...data, id: users[users.length - 1].id + 1}

		dispatch(addUser(data))

		navigate('/')
	}

	return (
		<div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
			<div className='w-50 border bg-secondary text-white p-5'>
				<h3>Add New User</h3>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div>
						<label htmlFor='name'>Name:</label>
						<input
							type='text'
							name='name'
							className='form-control'
							placeholder='enter name'
							{...register('name', {
								required: 'Поле обязательно нужно заполнить',
								minLength: {
									value: 2,
									message: 'Нужно минимум 2 символа',
								},
							})}
						/>
						<div style={{ height: 20 }}>
							{errors?.name && <p className='text-danger'>{errors?.name?.message || 'Error!'}</p>}
						</div>
					</div>
					<div>
						<label htmlFor='email'>Email:</label>
						<input
							type='email'
							name='email'
							className='form-control'
							placeholder='enter email'
							{...register('email', {
								required: 'Поле обязательно нужно заполнить',
								minLength: {
									value: 5,
									message: 'Нужно минимум 5 символа',
								},
							})}
						/>
						<div style={{ height: 20 }}>
							{errors?.email && <p className='text-danger'>{errors?.email?.message || 'Error!'}</p>}
						</div>
					</div>
					<br />
					<button className='btn btn-info' disabled={!isValid}>Submit</button>
				</form>
			</div>
		</div>
	)
}

export default Create
