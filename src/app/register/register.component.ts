import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 // acno=""
  //uname=""
  //pswd="" 

   

  registerForm = this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    acno:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })
  constructor(private router:Router, private dataService:DataService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }
   register(){
   
   if(this.registerForm.valid){
    var uname=this.registerForm.value.uname;
    var acno=this.registerForm.value.acno;
    var pswd=this.registerForm.value.pswd;
    var result=this.dataService.register(uname,acno,pswd);
  if(result==false){
    alert("User exist, please login");
  }
    else{
      alert("Successfully Registerd");
      this.router.navigateByUrl("");
    }
   }
   else{

    alert("Invalid Form")

  }
  }
 
  
}
