import React from 'react';
import { BsThreeDots } from 'react-icons/bs';

function CardPersonnel() {
	return (
		<div className="bg-white h-[450px] w-[250px] rounded-3xl mt-4 flex flex-col justify-start">
			<div className="flex justify-between items-center p-2">
				<h4 className="text-[18px] text-secondary">
					Personnel ID : <span className="text-primary">123456</span>
				</h4>
				<BsThreeDots className="text-secondary" />
			</div>
			<div className="w-[250px] p-[-8px] border border-bg"></div>
			<div className="flex justify-center items-center p-4">
				<div className="w-[150px] h-[150px] border border-secondary rounded-full flex justify-center items-center">
					Photo
				</div>
			</div>
			<div className="flex flex-col p-2">
				<div className="flex flex-col">
					<h1 className="font-bold text-secondary">Name</h1>
					<h1 className="text-secondary">First Name Last Name</h1>
				</div>
				<div className="flex flex-col">
					<h1 className="font-bold text-secondary">Telephone</h1>
					<h1 className="text-secondary">Phone Number</h1>
				</div>
				<div className="flex flex-col">
					<h1 className="font-bold text-secondary">Birthday</h1>
					<h1 className="text-secondary">DD-MM</h1>
				</div>
				<div className="flex flex-col">
					<h1 className="font-bold text-secondary">Email</h1>
					<h1 className="text-secondary">Email Address</h1>
				</div>
			</div>
		</div>
	);
}

export default CardPersonnel;
