import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAssocLinkedComponent } from './user-assoc-linked.component';

describe('UserAssocLinkedComponent', () => {
  let component: UserAssocLinkedComponent;
  let fixture: ComponentFixture<UserAssocLinkedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAssocLinkedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAssocLinkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
