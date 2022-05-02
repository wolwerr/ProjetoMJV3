import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentComponent } from './coment.component';

describe('StudentComponent', () => {
  let component: ComentComponent;
  let fixture: ComponentFixture<ComentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
