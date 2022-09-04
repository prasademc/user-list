import { CommentStore } from './comment-store.model';
import { Comment } from './comment.model';

export const COMMENT_INITIAL_STATE: CommentStore = {
	postComments: [],
};

export const COMMENT_INITIAL: Comment = {
	id: 0,
	postId: 0,
	name: '',
	email: '',
	body: '',
};
