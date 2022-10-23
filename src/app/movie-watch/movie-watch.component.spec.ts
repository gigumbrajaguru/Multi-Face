import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieWatchComponent } from './movie-watch.component';

describe('MovieWatchComponent', () => {
  let component: MovieWatchComponent;
  let fixture: ComponentFixture<MovieWatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieWatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
