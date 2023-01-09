import { Component } from '@angular/core';
import {LoginService} from './logins/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AssetManagementSystem';

   //declare variable
   isLoggedIn:boolean=false;
   constructor(public loginService:LoginService,
              private router:Router){}//contructer injection
 
   ngOnInit():void{
     this.isLoggedIn=this.loginService.isLogged;
   }
 
   //method for logout
 
   logOut(): void{
     this.router.navigateByUrl('/login');
     this.loginService.logOut();
   }

}
