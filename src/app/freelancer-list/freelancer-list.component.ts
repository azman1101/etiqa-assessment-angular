import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Freelancer } from '../freelancer';
import url from '../url';

@Component({
  selector: 'app-freelancer-list',
  templateUrl: './freelancer-list.component.html',
  styleUrls: ['./freelancer-list.component.less']
})
export class FreelancerListComponent {
  constructor() {
    this.editForm = new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      skillsets: new FormControl(''),
      hobby: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.getFreelancers()
  }

  freelancers: any;
  status = 'loading';

  editForm: FormGroup;

  isOpenDialog = false;

  selectedFreelancer = { id: 0, username: '', email: '', phone: '', skillsets: '', hobby: '' };

  isLoading = false;
  isError = false;

  deleteFreelancer(id: any) {
    this.status = 'loading';
    console.log('🚀 vv ~ delete id:', id);
    fetch(`${url}freelancer/${id}`, { method: 'DELETE' })
      .then((response) => response.json())
      .then((data) => {
        this.status = 'ready';
        this.freelancers = data;
        this.getFreelancers();
      })
      .catch((error) => {
        console.log('🚀 vv ~ error:', error);
        this.status = 'error';
        console.error('There was an error!', error);
      });
  }

  editFreelancer(data: any) {
    console.log('🚀 vv ~ data:', data);
    this.isOpenDialog = true;
    this.selectedFreelancer = data;
    console.log('🚀 vv ~ this.selectedFreelancer:', this.selectedFreelancer);
    this.editForm.setValue({
      username: this.selectedFreelancer.username,
      email: this.selectedFreelancer.email,
      phone: this.selectedFreelancer.phone,
      skillsets: this.selectedFreelancer.skillsets,
      hobby: this.selectedFreelancer.hobby,
    });
  }

  onSubmit() {
    this.isLoading = true;
    console.log('vv this.editForm.value', this.editForm.value);
    this.isOpenDialog = false;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    fetch(`${url}freelancer/${this.selectedFreelancer.id}`, {
      method: 'PUT',
      headers: myHeaders,
      body: JSON.stringify(this.editForm.value),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('🚀 vv ~ data:', data);
        this.isLoading = false;
        this.isOpenDialog = false;
        this.getFreelancers()
      })
      .catch((error) => {
        this.isLoading = false;
        this.isError = true;
        console.error('There was an error!', error);
      });
  }


  getFreelancers() {
    this.status = 'loading';
    fetch(`${url}freelancer`)
      .then((response) => response.json())
      .then(({ data }) => {
        console.log('🚀 vv ~ data:', data);
        this.status = 'ready';
        this.freelancers = data;
      })
      .catch((error) => {
        console.log('🚀 vv ~ error:', error);
        this.status = 'error';
        console.error('There was an error!', error);
      });
  }

}
