import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyphoneComponent } from './buyphone.component';

describe('BuyphoneComponent', () => {
  let component: BuyphoneComponent;
  let fixture: ComponentFixture<BuyphoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyphoneComponent]
    });
    fixture = TestBed.createComponent(BuyphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
