import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmafaComponent } from './almafa.component';

describe('AlmafaComponent', () => {
  let component: AlmafaComponent;
  let fixture: ComponentFixture<AlmafaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlmafaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlmafaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
