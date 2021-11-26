import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAssocLinksComponent } from './user-assoc-links.component';

describe('UserAssocLinksComponent', () => {
  let component: UserAssocLinksComponent;
  let fixture: ComponentFixture<UserAssocLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAssocLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAssocLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
