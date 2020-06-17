import { Component, OnInit } from '@angular/core';
import { InfoResumeService } from 'src/app/services/info-resume.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import emailjs from 'emailjs-com';
import swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
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
      name       : ['', [Validators.required, Validators.minLength(4)] ],
      email      : ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')] ],
      message    : ['', [Validators.required, Validators.minLength(10)] ]
    });
  }

  enviarEmail(){

    emailjs.init("user_tOqYUtf1UGURvkqhUoGE4");

    if( this.forma.invalid ){
      return Object.values( this.forma.controls ).forEach( control => {
        control.markAsTouched();
      });
    }

    var template_params = {
      "from_name"     : this.forma.controls.name.value,
      "from_email"    : this.forma.controls.email.value,
      "to_name"       : "Ramón Antonio Guzmán",
      "message_html"  : this.forma.controls.message.value
    }
  
    const service_id = "default_service";
    const template_id = "template_LiQm47wA";
  
   const nameEmail = this.forma.controls.name.value;

    emailjs.send(service_id, template_id, template_params)
        .then( resp => {
          swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Email sent, thanks ' + nameEmail,
            showConfirmButton: false,
            timer: 1500
          });
        }, (error) => {
          swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Something went wrong ' + nameEmail + '!',
            showConfirmButton: false,
            timer: 1500
          });
        });

        this.forma.reset({
          name    :'',
          email   :'',
          message :''
        });
  }
}