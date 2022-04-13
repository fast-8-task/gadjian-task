import React from 'react';
import logo from '../img/logo.png';

function Navbar() {
	return (
		<div className="w-screen h-[100px] flex justify-between px-[30px] py-[10px] bg-white fixed">
			<div>
				<img src={logo} alt="logo" className="w-auto h-[80px]" />
			</div>
			<div className="flex justify-between items-center">
				<p className="text-[18px] text-secondary">
					Hallo, <span className="text-primary">Gadjian User</span>
				</p>
				<div className="w-[60px] h-[60px] ml-4 border-secondary border rounded-full bg-transparent flex justify-center items-center">
					<p>Photo</p>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
