import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FreelancerListComponent } from './freelancer-list/freelancer-list.component';
import { AddFreelancerFormComponent } from './add-freelancer-form/add-freelancer-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FreelancerListComponent,
    AddFreelancerFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
