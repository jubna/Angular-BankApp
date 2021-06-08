import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
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
     
      loginForm = this.fb.group({
       
        acno:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
        pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
      })
  constructor(private router:Router, private dataService:DataService, private fb:FormBuilder) {}

  ngOnInit(): void {
  }
  login(){
   
    if(this.loginForm.valid){
    
      var acno=this.loginForm.value.acno;
      var pswd=this.loginForm.value.pswd;
    let result=this.dataService.login(acno,pswd);

    this.dataService.login(acno,pswd)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message),
        localStorage.setItem("name",result.name)
        localStorage.setItem("acno",result.acno)
        this.router.navigateByUrl("dashboard")
      }
    },
    (result)=>{
      alert(result.error.message)
    })
  }
   /* if(result==1){
    alert("success")
    this.router.navigateByUrl("dashboard")
   }
   else if(result==0){
    alert("invalid username or password");
   }
   else{
    alert("invalid account number");
   }
    } */
     else{

      alert("Invalid Form")
  
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
