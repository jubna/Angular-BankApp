import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  w_account="";
  w_password="";
  w_amount="";
  d_amount="";
  d_password="";
  d_account=""
  constructor( private dataService:DataService) { }

  ngOnInit(): void {
  }
  deposit(){
    var acno=this.d_account;
    var pwd=this.d_password;
    var amt=this.d_amount;
     let result=this.dataService.deposit(acno,pwd,amt);

     if(result){
       
      document.getElementById("msg_dep").innerHTML=`You account has been deposited  with amount ${amt}, available bal: ${result}`;
     }
  }

  withdraw(){
    var acno=this.w_account;
    var pwd=this.w_password;
    var amt=this.w_amount;
     let result=this.dataService.withdraw(acno,pwd,amt);
     if(result){
      document.getElementById("msg").innerHTML=`You account has been withdrawn with amount ${amt}, available bal: ${result}`;
     }
     else{
      document.getElementById("msg").innerHTML=`You account balance is low`;
     }
  }
}
