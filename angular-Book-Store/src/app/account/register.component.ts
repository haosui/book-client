import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { MustMatch } from 'src/app/_helpers/must-match.validator';
import { AccountService, AlertService } from '../_services';

@Component({ templateUrl: 'register.component.html' ,
styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;
    genders : any[];
    date: Date;
    
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        this.genders = [
            {name: 'Nam', code: 'M'},
            {name: 'Nữ', code: 'FM'},
        ];
        this.form = this.formBuilder.group({
            firstName:['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', [Validators.required]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
            dob: ['', [Validators.required]],
            phone: ['', [Validators.required, Validators.maxLength(15), Validators.pattern(/^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/)]],
            gender: ['', [Validators.required]]
            
    
        },
        {
            validator: MustMatch('password', 'confirmPassword')
        }
        
        );
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        
        this.loading = true;
        this.accountService.register(this.form.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.alertService.success('Registration successful', { keepAfterRouteChange: true });
                    this.router.navigate(['../login'], { relativeTo: this.route });
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
           
    }
}