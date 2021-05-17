import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


      aim="your perfect banking partner"
      acno="account no"
      pswd=""
      accountDetails = {
        1000: { acno: 1000,  username: "userone", password: "userone", balance: 50000 },
        1001: { acno: 1001,  username: "usertwo", password: "usertwo", balance: 5000 },
        1002: { acno: 1002,  username: "userthree", password: "userthree", balance: 10000 },
        1003: { acno: 1003,  username: "userfour", password: "userfour", balance: 6000 }
      };
  constructor(private router:Router) {}

  ngOnInit(): void {
  }
  login(){
    var acno=this.acno;
    var pwd=this.pswd;
    let users=this.accountDetails;
    if(acno in users){
      if (pwd == users[acno]["password"]) {
        alert("success")
        this.router.navigateByUrl("dashboard")
      }
      else{
       alert("invalid username or password");
      }
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
