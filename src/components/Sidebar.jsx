import React from 'react';
import { Link } from 'react-router-dom';
import { IoHome } from 'react-icons/io5';
import { MdGroups } from 'react-icons/md';
import { FaRegCalendarAlt } from 'react-icons/fa';

function Sidebar() {
	return (
		<div className="w-[300px] mt-[100px] h-screen bg-white fixed pt-4">
			<ul className="px-[30px]">
				<li className="p-2 hover:text-primary cursor-pointer">
					<Link to="/" className="flex items-center">
						<IoHome className="mr-2" />
						Beranda
					</Link>
				</li>
				<li className="p-2 hover:text-primary cursor-pointer">
					<Link to="/personnel" className="flex items-center">
						<MdGroups className="mr-2" />
						Personnel List
					</Link>
				</li>
				<li className="p-2 hover:text-primary cursor-pointer">
					<Link to="/attendance" className="flex items-center">
						<FaRegCalendarAlt className="mr-2" />
						Daily Attendance
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default Sidebar;
