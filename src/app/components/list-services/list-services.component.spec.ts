import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServicesComponent } from './list-services.component';

describe('ListInstancesComponent', () => {
  let component: ListServicesComponent;
  let fixture: ComponentFixture<ListServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
