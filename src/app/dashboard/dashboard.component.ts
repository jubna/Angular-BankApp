import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 /*  w_account="";
  w_password="";
  w_amount="";
  d_amount="";
  d_password="";
  d_account="";
 */

  user:any;
  withdrawForm = this.fb.group({
       
    w_account:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
    w_password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    w_amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })
  depositForm = this.fb.group({
       
    d_account:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
    d_password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    d_amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })

  constructor( private dataService:DataService,private fb:FormBuilder) { 
    this.user=localStorage.getItem("name")
  }

  ngOnInit(): void {
  }
  deposit(){
    if(this.depositForm.valid){
    
      var acno=this.depositForm.value.d_account;
      var pswd=this.depositForm.value.d_password;
      var amt=this.depositForm.value.d_amount;
    
     this.dataService.deposit(acno,pswd,amt)
     .subscribe((result:any)=>{
       if(result){
        document.getElementById("msg_dep").innerHTML=result.message;
         
       }
     },
     (result)=>{
       alert(result.error.message)
     })
   }

     /* if(result){
       alert(`You account has been deposited  with amount ${amt}, available bal: ${result}`);
     document.getElementById("msg_dep").innerHTML=`You account has been deposited  with amount ${amt}, available bal: ${result}`;
     }
  } */
  else{
    alert("invalid form")
  }
}


  withdraw(){
    if(this.withdrawForm.valid){
    
      var acno=this.withdrawForm.value.w_account;
      var pswd=this.withdrawForm.value.w_password;
      var amt=this.withdrawForm.value.w_amount;
    
      this.dataService.withdraw(acno,pswd,amt)
      .subscribe((result:any)=>{
        if(result){
          document.getElementById("msg").innerHTML=result.message;
          
        }
      },
      (result)=>{
        alert(result.error.message)
      })
    }
    /*  if(result){
     alert(`You account has been withdrawn with amount ${amt}, available bal: ${result}`);
     document.getElementById("msg").innerHTML=`You account has been withdrawn with amount ${amt}, available bal: ${result}`;
     }
     else{
       alert(`You account balance is low`);
     document.getElementById("msg").innerHTML=`You account balance is low`;
     }
  } */
  else{
    alert("invalid form")
  }
}
}
