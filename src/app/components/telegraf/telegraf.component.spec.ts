import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelegrafComponent } from './telegraf.component';

describe('TelegrafComponent', () => {
  let component: TelegrafComponent;
  let fixture: ComponentFixture<TelegrafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelegrafComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelegrafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
