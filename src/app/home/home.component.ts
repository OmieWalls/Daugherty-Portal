import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginType = null;
  futureEmployeeFirstNameInput;
  futureEmployeeLastNameInput;
  futureEmployeeConfirmationInput;
  futureEmployeeLastFourOfSSNInput;
  futureEmployeeForm = new FormGroup({
    'firstName': new FormControl(this.futureEmployeeFirstNameInput),
    'lastName': new FormControl(this.futureEmployeeLastNameInput),
    'confirmation': new FormControl(this.futureEmployeeConfirmationInput),
    'lastFourOfSSN': new FormControl(this.futureEmployeeLastFourOfSSNInput)
  });

  existingEmployeeEmailInput;
  existingEmployeePasswordInput;
  existingEmployeeTokenInput;
  existingEmployeeForm = new FormGroup({
    'email': new FormControl(this.existingEmployeeEmailInput),
    'password': new FormControl(this.existingEmployeePasswordInput),
    'token': new FormControl(this.existingEmployeeTokenInput)
  });

  constructor(private router: Router) {}

  ngOnInit() {
  }

  submitForm() {
    switch (this.loginType) {
      case 'Future Employee': this.router.navigate(['candidate/dashboard']).then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
      }); break;
      case 'Existing Employee': this.router.navigate(['dashboard']); break;
      case 'HR Admin': this.router.navigate(['admin/dashboard']); break;
      default:
    }
    console.log('Submitted for ' + this.loginType);
  }

  setLoginType(type: string) {
    this.loginType = type;
  }
}
