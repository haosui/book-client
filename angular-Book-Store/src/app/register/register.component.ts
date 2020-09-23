import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig} from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/_helpers/must-match.validator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  date: Date;
  validateForm: FormGroup;
  submitted = false;
  display: boolean = false;
  genders : any[];
  constructor(private fb: FormBuilder, private primengConfig: PrimeNGConfig) {}
  ngOnInit() {
    this.genders = [
      {name: 'Nam', code: 'M'},
      {name: 'Nữ', code: 'FM'},
    ];
    this.primengConfig.ripple = true;
    this.validateForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      dob: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.maxLength(15), Validators.pattern(/^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/)]],
      gender: ['', [Validators.required]],
      acceptTerms: [false, Validators.requiredTrue]
    },
    {
      validator: MustMatch('password', 'confirmPassword')
    }
    );
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
