import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  acno:any;
  lDate:Date= new Date();
  login_acno=localStorage.getItem("acno");
  login_name=localStorage.getItem("name")

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
  transferForm = this.fb.group({
       
     t_account:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
   /*    t_password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]], */
    tt_account:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
    t_amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })
  BalanceForm= this.fb.group({
       
    c_account:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
    c_password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
   
  })

  constructor( private dataService:DataService,private fb:FormBuilder,private router:Router) { 
    this.user=localStorage.getItem("name")
  }

  ngOnInit(): void {
  }

  checkBalance(){
    if(this. BalanceForm.valid){
    
      var acno=this. BalanceForm.value.c_account;
      var pswd=this. BalanceForm.value.c_password;
     
     this.dataService.checkBalance(acno,pswd)
     .subscribe((result:any)=>{
       if(result){
       document.getElementById("balance").innerHTML=result.message;
     //  alert(result.message)
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

transfer(){
  if(this.transferForm.valid){
    
   var acno=this.transferForm.value.t_account;
     /*  var pswd=this.transferForm.value.t_password; */
    var t_acno=this.transferForm.value.tt_account;
    var amt=this.transferForm.value.t_amount;
  
   this.dataService.transfer(acno,t_acno,amt)
   .subscribe((result:any)=>{
     if(result){
      alert(result.message);
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

deleteAcc(){
  this.acno=localStorage.getItem("acno");
}
onCancel(){
  this.acno="";
}
onDelete(event:any){
  this.dataService.deleteAccDetails(event)
  .subscribe((result:any)=>{
    if(result){
      alert(result.message);
      this.router.navigateByUrl("")
    }
  },
  (result)=>{
    alert(result.error.message)
  })
}

}
