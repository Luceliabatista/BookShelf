import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tec.ViewComponent } from './tec.view.component';

describe('Tec.ViewComponent', () => {
  let component: Tec.ViewComponent;
  let fixture: ComponentFixture<Tec.ViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tec.ViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tec.ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
