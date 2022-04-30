import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplyCommentItemComponent } from './reply-comment-item.component';

describe('ReplyCommentItemComponent', () => {
  let component: ReplyCommentItemComponent;
  let fixture: ComponentFixture<ReplyCommentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplyCommentItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplyCommentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
