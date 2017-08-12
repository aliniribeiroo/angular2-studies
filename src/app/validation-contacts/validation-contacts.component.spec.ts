import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationContactsComponent } from './validation-contacts.component';

describe('ValidationContactsComponent', () => {
  let component: ValidationContactsComponent;
  let fixture: ComponentFixture<ValidationContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
