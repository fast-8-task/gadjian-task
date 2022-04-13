import React from 'react';
import CardPersonnel from '../components/CardPersonnel';
import { FaSearch, FaPlus } from 'react-icons/fa';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

function PersonnelList() {
	return (
		<section className="bg-bg ml-[300px] pt-[120px] p-5">
			<div className="flex justify-between bg-white p-5">
				<div className="flex flex-col">
					<h1 className="uppercase text-[30px] text-primary font-bold">
						personnel list
					</h1>
					<h2 className="text-[28px] text-gray-400">List of all personnels</h2>
				</div>
				<div className="flex">
					<div className="w-[200px] h-[50px] flex justify-center items-center bg-white text-secondary border border-gray-400 mr-2 cursor-pointer">
						<FaSearch className="mr-2 text-primary" /> Find personnels
					</div>
					<div className="w-[200px] h-[50px] flex justify-center items-center bg-primary text-white border border-primary cursor-pointer">
						ADD PERSONNEL
						<FaPlus className="mr-2" />
					</div>
				</div>
			</div>
			<CardPersonnel />

			<div className="flex justify-center items-center">
				<button className="flex justify-center items-center border-none text-secondary mx-2">
					<IoChevronBack /> Previous Page
				</button>
				<button className="flex justify-center items-center border-none text-secondary mx-2">
					Next Page <IoChevronForward />
				</button>
			</div>
		</section>
	);
}

export default PersonnelList;
