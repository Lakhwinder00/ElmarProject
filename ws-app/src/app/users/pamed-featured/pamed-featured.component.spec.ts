import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PamedFeaturedComponent } from './pamed-featured.component';

describe('PamedFeaturedComponent', () => {
  let component: PamedFeaturedComponent;
  let fixture: ComponentFixture<PamedFeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PamedFeaturedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PamedFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
