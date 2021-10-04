import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-bootstrap',
  templateUrl: './input-bootstrap.component.html',
  styleUrls: ['./input-bootstrap.component.css']
})
export class InputBootstrapComponent implements OnInit {
  form!:FormGroup
  constructor(private fb:FormBuilder) { 
    this.form = this.fb.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      postaladdress:['',Validators.required],
      comments:['',Validators.required]
    });
  }

  ngOnInit(): void {
  }

}
