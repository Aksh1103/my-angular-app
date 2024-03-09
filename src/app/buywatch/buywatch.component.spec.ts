import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuywatchComponent } from './buywatch.component';

describe('BuywatchComponent', () => {
  let component: BuywatchComponent;
  let fixture: ComponentFixture<BuywatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuywatchComponent]
    });
    fixture = TestBed.createComponent(BuywatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
