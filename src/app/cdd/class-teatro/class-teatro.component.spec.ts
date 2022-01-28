import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassTeatroComponent } from './class-teatro.component';

describe('ClassTeatroComponent', () => {
  let component: ClassTeatroComponent;
  let fixture: ComponentFixture<ClassTeatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassTeatroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassTeatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
