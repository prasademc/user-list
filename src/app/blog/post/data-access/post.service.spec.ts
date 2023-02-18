
import { TestBed } from '@angular/core/testing';
import { map } from 'rxjs';

import { PostService } from './post.service';

describe('PostService', () => {
  let service: PostService;

  beforeEach(() => {
    TestBed.configureTestingModule({
		imports: [
			HttpCliien
		]
		providers: []
	});
    service = TestBed.inject(PostService);
  });

  it('should be call correct url', () => {
	service.getPostByUser$(1).subscribe((data) => {
		if(data) {
			const posts: number =  data.length;
			expect(posts).toBeGreaterThan(0);
		}
	});
  });
});
