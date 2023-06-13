import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angular-102';


  ngOnInit(): void {
    this.getFreelancers()
  }

  freelancers: any;
  status = 'loading';

  // url: string = 'https://64868926beba6297278edf86.mockapi.io/';
  url: string = 'http://localhost:3004/';
  getFreelancers() {
    fetch(`${this.url}freelancer`)
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
