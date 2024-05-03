import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // Here you can handle form submission logic, like sending data to a server
    console.log("Form submitted!");
  }

  onCancel() {
    // Here you can handle cancellation logic
    console.log("Form canceled!");
  }

}
