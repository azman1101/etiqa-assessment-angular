import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import url from '../url';

@Component({
  selector: 'app-add-freelancer-form',
  templateUrl: './add-freelancer-form.component.html',
  styleUrls: ['./add-freelancer-form.component.less']
})
export class AddFreelancerFormComponent {
  isOpen = false;
  addForm: FormGroup;

  // @Input() data: number[] = [];

  constructor() {
    // console.log('🚀 vv ~ data:', this.data);

    this.addForm = new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      skillsets: new FormControl(''),
      hobby: new FormControl(''),
    });
  }

  isLoading = false;
  isError = false;

  onSubmit() {
    this.isLoading = true;

    console.log(this.addForm.value);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    fetch(`${url}freelancer/`,
      {
        method: 'POST',
        body: JSON.stringify(this.addForm.value),
        headers: myHeaders,
      })
      .then((response) => response.json())
      .then((data) => {
        console.log('🚀 vv ~ data:', data);
        this.isLoading = false;
        this.resetForm();
        this.isOpen = false;
        location.reload();
      })
      .catch((error) => {
        this.isLoading = false;
        this.isError = true;
        console.error('There was an error!', error);
      });
  }

  resetForm() {
    this.addForm = new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      skillsets: new FormControl(''),
      hobby: new FormControl(''),
    });
  }
}
