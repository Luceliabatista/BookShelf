import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenArtesComponent } from './gen-artes.component';

describe('GenArtesComponent', () => {
  let component: GenArtesComponent;
  let fixture: ComponentFixture<GenArtesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenArtesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenArtesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
