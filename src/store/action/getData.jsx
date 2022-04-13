import axios from 'axios';

export const getData = () => {
	return (dispatch) => {
		axios
			.get('https://randomuser.me/api/?results=28', {
				headers: { 'Access-Control-Allow-Origin': '*' },
			})
			.then((data) => {
				dispatch(setData(data.data));
			})
			.catch((error) => {
				console.log(error.response);
			});
	};
};

export const setData = (payload) => {
	return {
		type: 'SET_LIST_DATA',
		payload,
	};
};
