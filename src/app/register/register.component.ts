import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  acno=""
  uname=""
  pswd=""

  constructor(private router:Router, private dataService:DataService) { }

  ngOnInit(): void {
  }
   register(){

    var uname=this.uname;
    var acno=this.acno;
    var pswd=this.pswd;
    var result=this.dataService.register(uname,acno,pswd);
  if(result==false){
    alert("User exist, please login");
  }
    else{
      alert("Successfully Registerd");
      this.router.navigateByUrl("");
    }
   }
}
