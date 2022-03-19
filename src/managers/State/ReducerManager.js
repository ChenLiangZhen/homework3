import { ACTIONS } from './ActionLibrary'

const Reducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.UPDATE_CURRENT_BOOK_DATA:
			return {
				...state,
				currentBookData: action.payload
			};

		case ACTIONS.UPDATE_TEST_DATA:
			return {
				...state,
				test: action.payload
			};
	}
};

export default Reducer