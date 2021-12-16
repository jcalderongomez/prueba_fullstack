import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadAuthorComponent } from './read-author.component';

describe('ReadAuthorComponent', () => {
  let component: ReadAuthorComponent;
  let fixture: ComponentFixture<ReadAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadAuthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
