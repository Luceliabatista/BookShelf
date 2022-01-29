import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassVendidoComponent } from './class-vendido.component';

describe('ClassVendidoComponent', () => {
  let component: ClassVendidoComponent;
  let fixture: ComponentFixture<ClassVendidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassVendidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassVendidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
