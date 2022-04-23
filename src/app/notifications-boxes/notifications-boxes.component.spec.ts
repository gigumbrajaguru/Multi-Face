import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsBoxesComponent } from './notifications-boxes.component';

describe('NotificationsBoxesComponent', () => {
  let component: NotificationsBoxesComponent;
  let fixture: ComponentFixture<NotificationsBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationsBoxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
