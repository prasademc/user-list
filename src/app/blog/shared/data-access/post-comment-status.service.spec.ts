import { TestBed } from '@angular/core/testing';

import { PostCommentStatusService } from './post-comment-status.service';

describe('PostCommentStatusService', () => {
  let service: PostCommentStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostCommentStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
