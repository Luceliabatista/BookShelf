import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassSagasComponent } from './class-sagas.component';

describe('ClassSagasComponent', () => {
  let component: ClassSagasComponent;
  let fixture: ComponentFixture<ClassSagasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassSagasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassSagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
