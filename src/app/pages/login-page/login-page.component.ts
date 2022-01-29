import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user/user-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  names: string[] = ["Mare", "Milan", "Aca", "Spaske", "Gogi", "Dzoni", "Andrija", "Ceka"]
  broj: number = 100


  loginform:FormGroup
  constructor(private formbuilder: FormBuilder,
    private registerService: UserServiceService,
    private router:Router
    ) { 



    this.loginform=this.formbuilder.group({
      email:new FormControl("",[Validators.required]),
      password:new FormControl("",[Validators.required]),

    })
  }

  ngOnInit(): void {


  }

  login(): void{
    
    let user={
      email:this.loginform.get("email")?.value,
      password:this.loginform.get("password")?.value
    };
    
    this.registerService.loginUser(user).subscribe(result=>
      {
        window.sessionStorage.setItem("user_email", result.user.email)

        this.router.navigate(["/home"])
        
      }
      

      )


//window.sessionStorage.setItem("user_email", result=>)
  }
}