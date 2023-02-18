import { PostStore } from './post-store.model';
import { Post } from './post.model';

export const POST_INITIAL_STATE: PostStore = {
	userPosts: [],
	currentAllPost: [],
	previousPostStatus: false,
	user: {
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
	},
};

export const POST_INITIAL: Post = {
	id: 0,
	userId: 0,
	title: '',
	body: '',
};
