import { UserStore } from './user-store.model';
import { User } from './user.model';

export const USER_INITIAL_STATE: UserStore = {
	users: [],
};

export const USER_INITIAL: User = {
	id: 0,
	name: '',
	username: '',
	email: '',
	address: {
		street: '',
		suite: '',
		city: '',
		zipcode: '',
		geo: {
			lat: 0,
			lng: 0,
		},
	},
	phone: '',
	website: '',
	company: {
		name: '',
		catchPhrase: '',
		bs: '',
	},
};
