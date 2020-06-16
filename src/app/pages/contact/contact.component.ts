import { Component, OnInit } from '@angular/core';
import { InfoResumeService } from 'src/app/services/info-resume.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  forma: FormGroup;

  constructor(public service: InfoResumeService,
              private fb: FormBuilder) {
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  get nombreNoValido(){
    return this.forma.get('name').invalid && this.forma.get('name').touched;
  }

  get emailNoValido(){
    return this.forma.get('email').invalid && this.forma.get('email').touched;
  }

  get messageNoValido(){
    return this.forma.get('message').invalid && this.forma.get('message').touched;
  }

  crearFormulario(){
    this.forma = this.fb.group({
      name    : ['', [Validators.required, Validators.minLength(4)] ],
      email   : ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')] ],
      message : ['', [Validators.required, Validators.minLength(10)] ]
    });
  }

  enviar(){
    console.log(this.forma);

    if( this.forma.invalid ){
      return Object.values( this.forma.controls ).forEach( control => {
        control.markAsTouched();
      });
    }
  }

}