import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  currentUser="";
  accountDetails:any = {
    1000: { acno: 1000,  username: "userone", password: "userone", balance: 50000 },
    1001: { acno: 1001,  username: "usertwo", password: "usertwo", balance: 5000 },
    1002: { acno: 1002,  username: "userthree", password: "userthree", balance: 10000 },
    1003: { acno: 1003,  username: "userfour", password: "userfour", balance: 6000 }
  };
  
 
  constructor( private http:HttpClient) {
    this.getDetails();
   }

 /*  saveDetails(){
    localStorage.setItem("accountDetails",JSON.stringify(this.accountDetails));
    if(this.currentUser){
      localStorage.setItem("currentUser",JSON.stringify(this.currentUser));
    }
  } */
  saveDetails(){
    localStorage.setItem("accountDetails",JSON.stringify(this.accountDetails));

    if(this.currentUser){
    localStorage.setItem("currentUser",JSON.stringify(this.currentUser));
  }
}
  getDetails(){

    if(localStorage.getItem("accountDetails")){
    this.accountDetails =  JSON.parse( localStorage.getItem("accountDetails") || '')
}
    if(localStorage.getItem("currentUser")){
      this.currentUser =  JSON.parse( localStorage.getItem("currentUser") || '')
    }

  }
 /*  getDetails(){
    if(localStorage.getItem("accountDetails")){
    this.accountDetails=JSON.parse(localStorage.getItem("accountDetails") || '');
    }
    if(localStorage.getItem("currentUser")){
    this.currentUser=JSON.parse(localStorage.getItem("currentUser") || '');
  }
} 
 */


  register(uname:any,acno:any,pswd:any){
       
      const data={
      uname,
      acno,
      pswd
      }

     return this.http.post("http://localhost:3000/register/",data)

   /* var user=this.accountDetails;
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
      this.saveDetails()
      return true;
      
    } */
  }

  login(acno:any,pswd:any){

    const data={
      acno,
      pswd
      }

     return this.http.post("http://localhost:3000/login/",data)
 /*  var users=this.accountDetails;
    if(acno in users){
      if (pswd == users[acno]["password"]) {
        this.currentUser=users[acno]["username"];
        this.saveDetails();
        return 1;
       
      }
      else{
        return 0;
       
      }
    }
    else{
      return -1;
    
    } */
  }

  deposit(acno:any,pwd:any,amt:any){
    var user=this.accountDetails;
    amt=parseInt(amt);
    if(acno in user){
      if(pwd == user[acno]["password"]){
       
        user[acno]["balance"]+=amt;
        this.saveDetails();
         return user[acno]["balance"];
      }
      else{
        alert("invalid username or password");
        return false;
       }
    }
    else{
      alert("invalid account number");
      return false;
    }
  }

  withdraw(acno:any,pwd:any,amt:any){
    var user=this.accountDetails;
     amt=parseInt(amt);
    if(acno in user){
      if(pwd == user[acno]["password"]){
        
          if(user[acno]["balance"]>amt){
            user[acno]["balance"]-=amt;
            this.saveDetails();
            return user[acno]["balance"];
          }
          else{
            alert(`You account balance is low`);
            return false;
          }
  }
  else{
    alert("invalid username or password");
    return false;
   }
}
else{
  alert("invalid account number");
  return false;
}
}
}
