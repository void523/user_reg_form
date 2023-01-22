import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.scss']
})

export class UserRegComponent implements OnInit {
  @ViewChild('f') form: any;

  langs:string[] = ['English', 'German', 'French'];

  model:signUp = new signUp();

  ngOnInit(){

  };

  onSubmit(){
    if (this.form.valid){
      // console.log(f)
      console.log("Form submitted")
      this.form.reset();
    }
  }
}

class signUp {
  constructor(
    public firstName:string='',
    public lastName:string='',
    public email:string='',
    public password:string='',
    public language:string=''
  ){}
}

