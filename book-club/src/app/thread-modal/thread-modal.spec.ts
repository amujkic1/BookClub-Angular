import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadModal } from './thread-modal';

describe('ThreadModal', () => {
  let component: ThreadModal;
  let fixture: ComponentFixture<ThreadModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreadModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreadModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
