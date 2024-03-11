import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = new FormControl('');
  password = new FormControl('');

  loginForm = new FormGroup({
    email: this.email,
    password: this.password

  });

  constructor(
    private service: AuthService,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  login() {
    console.log(this.loginForm.value);
    this.service.login(this.loginForm.value).subscribe((response) => {
      console.log(response);
      if (response.jwtToken) {
        const jwtToken = response.jwtToken;
        localStorage.setItem('JWT', jwtToken);
        this.router.navigateByUrl('/crowdposting');
      }
    },
    (error) => {
      
      alert("Credenciales invalidas")
    })
  }

}
