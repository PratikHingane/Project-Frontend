import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Jwtresponse } from 'src/app/shared/jwtresponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error='';
  isSubmitted:boolean=false;
  jwtresponse: any=new Jwtresponse();

  constructor(private formBuilder:FormBuilder,
             private loginService: LoginService,
             private router:Router) { }

  ngOnInit(): void {
    //generete Reactivr Form
    //FormGroup -- FormControlName --FormBuilder
    this.loginForm=this.formBuilder.group(
      {
        //emailId
        username:['',[Validators.required,Validators.minLength(2)]],
        
        //password
        password:['',[Validators.required]]
      }
    )
  }
  
  //get all controls from loginForm
  get formControls(){
    return this.loginForm.controls;
  }

  loginCredential():void{

    //Validation
    this.isSubmitted=true;
    console.log(this.loginForm.value);

   // invalid
    if(this.loginForm.invalid)
    return;
    //valid LoginForm
    //check username and Password ---call service
    if(this.loginForm.valid){
      this.loginService.loginVerify(this.loginForm.value).subscribe(
        (result)=>{
          this.error="";
          console.log(result);
          this.jwtresponse=result;
          //bases on role, route the component
          //role 1-- Admin
          if(this.jwtresponse.data.role===1){
            this.loginService.isLogged=true;

            //session management -- localstorage
            localStorage.setItem("USER_NAME",this.jwtresponse.data.firstName);
            sessionStorage.setItem("USER_NAME",this.jwtresponse.data.firstName);
            localStorage.setItem("ACCESS_ROLE",this.jwtresponse.data.role);
            localStorage.setItem("JWT_TOKEN",this.jwtresponse.data.accessToken);
            


            this.router.navigateByUrl("/admin");


          }else if(this.jwtresponse.data.role===2){
            //role 2 -- Manager
            this.loginService.isLogged=true;
            this.router.navigateByUrl("/purchasemng");
          }else{
            this.error="sorry! Not allowed";
          }
          
        },
        (error)=>{
          console.log(error);
          this.error="Invalid userid and pasword";
        }
      );
    }

  }

}
