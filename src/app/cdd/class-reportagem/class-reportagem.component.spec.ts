import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassReportagemComponent } from './class-reportagem.component';

describe('ClassReportagemComponent', () => {
  let component: ClassReportagemComponent;
  let fixture: ComponentFixture<ClassReportagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassReportagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassReportagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
