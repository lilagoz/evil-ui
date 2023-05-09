import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvilPhonenumberComponent } from './evil-phonenumber.component';

describe('EvilPhonenumberComponent', () => {
  let component: EvilPhonenumberComponent;
  let fixture: ComponentFixture<EvilPhonenumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvilPhonenumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvilPhonenumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
