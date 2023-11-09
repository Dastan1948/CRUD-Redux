import React from 'react'
import { useSelector } from 'react-redux'
import Container from '../components/Container'
import TableHead from '../components/TableHead'
import Title from '../components/Title'
import UserCart from '../components/userCart'

const Home = () => {
	const { users } = useSelector(state => state.users)

	return (
		<Container>
			<Title />
			<table className='table'>
				<TableHead />
				<tbody>
					{users.map(user => (
						<UserCart key={user.id} {...user} />
					))}
				</tbody>
			</table>
		</Container>
	)
}

export default Home
