import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConfigurationsComponent } from './list-configurations.component';

describe('ListConfigurationsComponent', () => {
  let component: ListConfigurationsComponent;
  let fixture: ComponentFixture<ListConfigurationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListConfigurationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConfigurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
