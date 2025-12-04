import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { AuthfakeauthenticationService } from 'src/app/core/services/authfake.service';
import { CrudService } from 'src/app/core/services/crud.service';
import { login } from 'src/app/store/Authentication/authentication.actions';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

// Login Component
export class LoginComponent {

  // Login Form
  loginForm!: UntypedFormGroup;
  submitted = false;
  fieldTextType!: boolean;
  error = '';
  returnUrl!: string;
  a: any = 10;
  b: any = 20;
  toast!: false;

  // set the current year
  year: number = new Date().getFullYear();

  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: UntypedFormBuilder,
    private router: Router,private service : CrudService,
    private store: Store,
) { }

  ngOnInit(): void {
    if (localStorage.getItem('currentUser')) {
      this.router.navigate(['/']);
    }
    /**
     * Form Validatyion
     */
    // this.loginForm = this.formBuilder.group({
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', [Validators.required]],
    // });
    this.loginForm = this.formBuilder.group({
      email: ['admin@gmail.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required]],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  /**
   * Form submit
   */
  // onSubmit() {
  //   this.submitted = true;

  //   const email = this.f['email'].value; // Get the username from the form
  //   const password = this.f['password'].value; // Get the password from the form

  //   // Login Api
  //   this.store.dispatch(login({ email: email, password: password }));
  // }

  /**
   * Password Hide/Show
   */
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
onSubmit() {
  this.submitted = true;
 
  const email = this.f['email'].value;
  const password = this.f['password'].value;
 
  const VALID_USER = "admin@gmail.com";
  const VALID_PASS = "123456";
 
  if (email === VALID_USER && password === VALID_PASS) {
    // Save user as currentUser because AuthGuard checks this key
    localStorage.setItem("currentUser", JSON.stringify({ email }));
 
    // Navigate to dashboard
    this.router.navigate(['/']);
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Invalid Credentials',
      text: 'Please enter correct email and password'
    });
  }
}
 
 

}
