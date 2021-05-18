import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


      aim="your perfect banking partner"
      acno="account no"
      pswd=""
     
  constructor(private router:Router, private dataService:DataService) {}

  ngOnInit(): void {
  }
  login(){
    var acno=this.acno;
    var pwd=this.pswd;
    let result=this.dataService.login(acno,pwd);
   if(result==1){
    alert("success")
    this.router.navigateByUrl("dashboard")
   }
   else if(result==0){
    alert("invalid username or password");
   }
   else{
    alert("invalid account number");
   }
    }
  
/*   accnoChange(event:any){
    this.acno=event.target.value;
  console.log(this.acno);
  }
  pwdChange(event:any){
    this.password=event.target.value;
    console.log(this.password);
  }   */
 register(){
   this.router.navigateByUrl("register")
 }
}
