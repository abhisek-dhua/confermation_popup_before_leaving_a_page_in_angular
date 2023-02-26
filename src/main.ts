import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <h1>Hello im {{name}}!</h1>
    <form [formGroup]=form (ngSubmit)="onSubmit()">
    <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="text" class="form-control-plaintext" id="staticEmail" placeholder="email@example.com" formControlName="email">
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword" formControlName="password">
    </div>
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">Confirm identity</button>
  </div>
    </form>
  `,
})
export class App implements OnInit {
  name = 'Abhisk';
  form!: FormGroup;
  initialValue!: any;

  ngOnInit(): void {
    this.initilizeForm();
  }

  initilizeForm() {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
    this.initialValue = this.form.getRawValue();
  }

  onSubmit() {
    console.log(this.form.getRawValue());
  }
}

bootstrapApplication(App);
