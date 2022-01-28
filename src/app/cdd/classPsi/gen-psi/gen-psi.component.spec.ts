import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenPsiComponent } from './gen-psi.component';

describe('GenPsiComponent', () => {
  let component: GenPsiComponent;
  let fixture: ComponentFixture<GenPsiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenPsiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenPsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
