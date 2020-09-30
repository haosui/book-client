import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceInfoComponent } from './rece-info.component';

describe('ReceInfoComponent', () => {
  let component: ReceInfoComponent;
  let fixture: ComponentFixture<ReceInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
