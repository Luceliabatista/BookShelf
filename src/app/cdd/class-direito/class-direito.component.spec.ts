import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassDireitoComponent } from './class-direito.component';

describe('ClassDireitoComponent', () => {
  let component: ClassDireitoComponent;
  let fixture: ComponentFixture<ClassDireitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassDireitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassDireitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
