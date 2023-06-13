import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFreelancerFormComponent } from './add-freelancer-form.component';

describe('AddFreelancerFormComponent', () => {
  let component: AddFreelancerFormComponent;
  let fixture: ComponentFixture<AddFreelancerFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFreelancerFormComponent]
    });
    fixture = TestBed.createComponent(AddFreelancerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
