import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostapiComponent } from './postapi.component';

describe('PostapiComponent', () => {
  let component: PostapiComponent;
  let fixture: ComponentFixture<PostapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostapiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
