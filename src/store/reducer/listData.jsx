const initialState = [];

const listData = (state = initialState, action) => {
	if (action.type === 'SET_LIST_DATA') {
		return action.payload;
	}

	return state;
};

export default listData;
