import { IUsersState } from '../../types';

const initialState = {
	user: null,
};

const usersReduser = (state: IUsersState = initialState, action: any) => {
	switch (action.type) {
		default: {
			return state;
		}
	}
};

export { usersReduser };
