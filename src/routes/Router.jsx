import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Create from '../pages/Create'
import Update from '../pages/Update'

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/create' element={<Create />} />
			<Route path='/edit/:id' element={<Update />} />

			<Route path='*' element={<h1>Page Not Found</h1>} />
		</Routes>
	)
}

export default Router
