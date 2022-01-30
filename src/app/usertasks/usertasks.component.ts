import { Component, OnInit } from '@angular/core';
import usertasks from '../tasks.json'; 
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

interface Usertask {  
  Task: String;  
  Expiry_date: String;  
  User: String;  
  Important : Boolean;
  Created_on : String; 
   } 

   interface Users {  
     
    // User: String;  
    
     } 

@Component({
  selector: 'app-usertasks',
  templateUrl: './usertasks.component.html',
  styleUrls: ['./usertasks.component.css']
})
export class UsertasksComponent implements OnInit {
  
  loading = false;
  submitted = false;
  selected = 'option2';
value:any;
  constructor() { }

  ngOnInit(): void {
  //   this.form = this.formBuilder.group({
  //     task: ['', Validators.required],
  //     password: ['', Validators.required]
  // });
  }
  currentval:any;
  
  getVal(val :any){   
    
    this.currentval = val

    console.log(this.currentval, val);

    
    var z = val
  }
 
  

  tasks:Usertask[] = usertasks.Tasks;
  userdd:Users[] = usertasks.Users;

  
}
