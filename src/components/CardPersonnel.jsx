import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import allStore from '../store/action';
import { BsThreeDots } from 'react-icons/bs';

function CardPersonnel() {
	const dispatch = useDispatch();
	const dataPersonnel = useSelector(({ listData }) => listData['results']);

	useEffect(() => {
		dispatch(allStore.getData());
	}, [dispatch]);

	useEffect(() => {
		console.log(dataPersonnel);
	}, [dataPersonnel]);

	if (!dataPersonnel) {
		return <></>;
	}

	return (
		<div className="flex flex-wrap justify-around">
			{dataPersonnel.map((el, i) => (
				<div
					key={i}
					className="bg-white h-min w-[250px] rounded-3xl mt-4 flex flex-col justify-start">
					<div className="flex justify-between items-center p-2">
						<h4 className="text-[18px] text-secondary">
							Personnel ID : <span className="text-primary">{el.id.value}</span>
						</h4>
						<BsThreeDots className="text-secondary" />
					</div>
					<div className="w-[250px] p-[-8px] border border-bg"></div>
					<div className="flex justify-center items-center p-4">
						<div
							className="w-[150px] h-[150px] border border-secondary rounded-full flex justify-center items-center bg-cover"
							style={{ backgroundImage: `url('${el.picture.large}')` }}></div>
					</div>
					<div className="flex flex-col p-2">
						<div className="flex flex-col">
							<h1 className="font-bold text-secondary">Name</h1>
							<h1 className="text-secondary">
								{el.name.title} {el.name.first} {el.name.last}
							</h1>
						</div>
						<div className="flex flex-col">
							<h1 className="font-bold text-secondary">Telephone</h1>
							<h1 className="text-secondary">{el.phone}</h1>
						</div>
						<div className="flex flex-col">
							<h1 className="font-bold text-secondary">Birthday</h1>
							<h1 className="text-secondary">{el.dob.date}</h1>
						</div>
						<div className="flex flex-col">
							<h1 className="font-bold text-secondary">Email</h1>
							<h1 className="text-secondary">{el.email}</h1>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default CardPersonnel;
