import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  accountDetails:any = {
    1000: { acno: 1000,  username: "userone", password: "userone", balance: 50000 },
    1001: { acno: 1001,  username: "usertwo", password: "usertwo", balance: 5000 },
    1002: { acno: 1002,  username: "userthree", password: "userthree", balance: 10000 },
    1003: { acno: 1003,  username: "userfour", password: "userfour", balance: 6000 }
  };
  constructor() { }

  register(uname:any,acno:any,pswd:any){
   var user=this.accountDetails;
    if(acno in user){
     
      return false;
    }
    else{
      user[acno]={
        acno,
        username:uname,
        password:pswd,
        balance:0
      }
      return true;
      
    }
  }

  login(acno:any,pswd:any){
  var users=this.accountDetails;
    if(acno in users){
      if (pswd == users[acno]["password"]) {
        return 1;
       
      }
      else{
        return 0;
       
      }
    }
    else{
      return -1;
    
    }
  }

  deposit(acno:any,pwd:any,amt:any){
    var user=this.accountDetails;
    if(acno in user){
      if(pwd == user[acno]["password"]){
        var bal=user[acno]["balance"];
        bal+=parseInt(amt);
         return bal;
      }
      else{
        alert("invalid username or password");
       }
    }
    else{
      alert("invalid account number");
    }
  }

  withdraw(acno:any,pwd:any,amt:any){
    var user=this.accountDetails;
    if(acno in user){
      if(pwd == user[acno]["password"]){
        var bal=user[acno]["balance"];
          if(amt<bal){
            bal-=amt;
            return bal;
          }
          else{
            return false;
          }
  }
  else{
    alert("invalid username or password");
   }
}
else{
  alert("invalid account number");
}
}
}
