import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassSugestaoComponent } from './class-sugestao.component';

describe('ClassSugestaoComponent', () => {
  let component: ClassSugestaoComponent;
  let fixture: ComponentFixture<ClassSugestaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassSugestaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassSugestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
