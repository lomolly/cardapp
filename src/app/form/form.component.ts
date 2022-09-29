import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  cardForm : FormGroup | any;
  submitted = false;
  constructor(public fb : FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  get f() { return this.cardForm.controls; }

  initializeForm() {
    this.cardForm = this.fb.group({
      cardNo : ['', [Validators.required]],
      cardHolder: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      expiryDate: ['', Validators.required],
      cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]]
    })
  }


  onSubmit() {
    this.submitted = true;
    console.log(this.cardForm);
    if(this.cardForm.invalid) {
      return;
    }

    // , Validators.pattern('^([0-9]{4})([0-9]{4})?([0-9]{4})?([0-9]{4})?$')
    let data = Object.assign({}, this.cardForm.value);
    
    console.log('value', this.cardForm.value)
    console.log('card no', this.cardForm.value.cardNo.replace('^([0-9]{4})([0-9]{4})?([0-9]{4})?([0-9]{4})?$'));
  }

}
