import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAssocNotLinkedComponent } from './user-assoc-not-linked.component';

describe('UserAssocNotLinkedComponent', () => {
  let component: UserAssocNotLinkedComponent;
  let fixture: ComponentFixture<UserAssocNotLinkedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAssocNotLinkedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAssocNotLinkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
