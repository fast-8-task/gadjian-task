import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Beranda from '../views/beranda';
import PersonnelList from '../views/personnelList';
import Attendance from '../views/attendance';

function MainRoute() {
	return (
		<BrowserRouter>
			<Navbar />
			<Sidebar />
			<Routes>
				<Route exact path="/" element={<Beranda />} />
				<Route exact path="/personnel" element={<PersonnelList />} />
				<Route exact path="/attendance" element={<Attendance />} />
			</Routes>
		</BrowserRouter>
	);
}

export default MainRoute;
