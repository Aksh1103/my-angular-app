import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyiphoneComponent } from './buyiphone.component';

describe('BuyiphoneComponent', () => {
  let component: BuyiphoneComponent;
  let fixture: ComponentFixture<BuyiphoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyiphoneComponent]
    });
    fixture = TestBed.createComponent(BuyiphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
