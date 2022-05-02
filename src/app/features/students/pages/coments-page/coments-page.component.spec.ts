import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentsPageComponent } from './coments-page.component';

describe('ComentsPageComponent', () => {
  let component: ComentsPageComponent;
  let fixture: ComponentFixture<ComentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
