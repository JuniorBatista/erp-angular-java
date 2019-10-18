import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { ToastComponent } from '../../toast/toast.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   loginForm: FormGroup;
   submitted = false;
   loading = false;
   returnUrl: string;

   constructor(
    private authService: AuthenticateService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private toastComponent: ToastComponent
  ) {}

   // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
            login: ['', Validators.required],
            password: ['', Validators.required]
        });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  onSubmit() {

     this.submitted = true;

    // stop here if form is invalid
     if (this.loginForm.invalid) {
        return;
    }

     this.loading = true;
     this.authService.login(this.f.login.value, this.f.password.value)
        .pipe(first())
        .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.toastComponent.showError(error);
                    this.alertService.error(error);
                    this.loading = false;
                });
  }

}
