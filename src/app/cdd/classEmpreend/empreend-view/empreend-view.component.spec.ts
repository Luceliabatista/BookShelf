import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpreendViewComponent } from './empreend-view.component';

describe('EmpreendViewComponent', () => {
  let component: EmpreendViewComponent;
  let fixture: ComponentFixture<EmpreendViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpreendViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpreendViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
