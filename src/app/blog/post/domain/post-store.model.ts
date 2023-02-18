import { User } from '../../user/domain/user.model';
import { Post } from './post.model';

export interface PostStore {
	userPosts: Array<Post>;
	currentAllPost: Array<Post>;
	previousPostStatus: boolean;
	user: User;
}
