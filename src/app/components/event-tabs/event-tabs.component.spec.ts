import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTabsComponent } from './event-tabs.component';

describe('EventTabsComponent', () => {
  let component: EventTabsComponent;
  let fixture: ComponentFixture<EventTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
