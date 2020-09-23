import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  
  validateForm: FormGroup;
  submitted = false;
  display: boolean = false;

  
  ngOnInit() {
    this.validateForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.validateForm.controls; }

  submitForm() {
    this.submitted = true;
    if (this.validateForm.invalid) {
      alert('Kiểm tra lại thông tin !')
      return;
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.validateForm.value, null, 4));
   }
  }
  showDialog() {
      this.display = true;
  }


}
