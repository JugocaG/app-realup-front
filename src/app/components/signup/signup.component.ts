import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  name = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  confirmPassword = new FormControl('');

  signupForm = new FormGroup({
    name: this.name,
    email: this.email,
    password: this.password,
    confirmPassword: this.confirmPassword,

  });

  constructor(
    private service: AuthService,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {

    this.service.verificarToken()
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, { validator: this.passwordMatchValidator })
  }

  private passwordMatchValidator(fg: FormGroup) {
    const password = fg.get('password')?.value;
    const confirmPassword = fg.get('confirmPassword')?.value;
    if (password != confirmPassword) {
      fg.get("confirmPassword")?.setErrors({ passwordMismatch: true });
    } else {
      fg.get('confirmPassword')?.setErrors(null);
    }
  }

  signup() {
    console.log(this.signupForm.value);
    this.service.signup(this.signupForm.value).subscribe((response) => {
      console.log(response);
      this.router.navigateByUrl('/ugc');
    })
  }

  logout(): void {
    this.service.logout().subscribe(() => {
      // Puedes realizar acciones adicionales después de cerrar sesión si es necesario.
      console.log('Sesión cerrada exitosamente');
      window.location.href = '/';

    });
  }

}
