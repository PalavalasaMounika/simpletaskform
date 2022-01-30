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
  form!: FormGroup;
  loading = false;
  submitted = false;
  selected = 'option2';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  currentval ="";
  
  getVal(val :any){
    this.currentval = val
  }
 
  get f() { return this.form.controls; }

  tasks:Usertask[] = usertasks.Tasks;
  userdd:Users[] = usertasks.Users;

  
}
