import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import url from './url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(private modalService: NgbModal) {
  }

  title = 'Freelancer Database';


  ngOnInit(): void {
    this.getFreelancers()
  }

  freelancers: any;
  status = 'loading';

  getFreelancers() {
    fetch(`${url}freelancer`)
      .then((response) => response.json())
      // .then(() => {
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
