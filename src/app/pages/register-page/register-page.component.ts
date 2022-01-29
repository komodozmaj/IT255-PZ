import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user/user-service.service';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

   registerform:FormGroup

  constructor(private formbuilder: FormBuilder,
    private registerService: UserServiceService,
    private router:Router
    ) { 



    this.registerform=this.formbuilder.group({
      email:new FormControl("",[Validators.required]),
      password:new FormControl("",[Validators.required]),

    })
  }

  ngOnInit(): void {


  }

  register(): void{
    
    let user={
      email:this.registerform.get("email")?.value,
      password:this.registerform.get("password")?.value
    };
    
    this.registerService.registerUser(user).subscribe(result=>console.log(result))

    this.router.navigate(["/login"])

  }

}
