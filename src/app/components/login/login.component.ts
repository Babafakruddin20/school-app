import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm: FormGroup;

  // to access that service into componet we have to inject..,,,,we have two forms email,password so we have import reactive form in app.modules .ts
  
  constructor(private authservice: AuthService , private router:Router){
    this.loginForm= new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    })
  }
  login(){
    this.authservice.doLogin(this.loginForm.value).subscribe(
      value=>{
        localStorage.setItem("token",value.token);
        this.router.navigateByUrl("/dashboard");
      },
      error=>{
        alert("failed");
      }
    )
  }


}
