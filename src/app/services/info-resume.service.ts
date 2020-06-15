import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoResumeService {

  personalJSON ;
  cargandoPersonal = true;

  socialMediaJSON;
  cargandoSocialMedia = true;

  skillsJSON;
  cargandoSkills = true;

  educationJSON;
  cargandoEducation = true;

  constructor(private httpClient: HttpClient) {
    this.cargarPersonal();
    this.cargarSocialMedia();
    this.cargarSkills();
    this.cargarEducation();
  }

  private cargarPersonal(){
    this.httpClient.get('https://resumeangular-1a061.firebaseio.com/personal.json')
      .subscribe( resp => {
          this.personalJSON = resp;
          this.cargandoPersonal = false;
        });
  }

  private cargarSocialMedia(){
    this.httpClient.get('https://resumeangular-1a061.firebaseio.com/social_media.json')
      .subscribe( resp =>{
        console.log( resp );
        this.socialMediaJSON = resp;
        this.cargandoSocialMedia = false;
      });
  }

  private cargarSkills(){
    this.httpClient.get('https://resumeangular-1a061.firebaseio.com/skills.json')
      .subscribe( resp => {
        this.skillsJSON = resp;
        this.cargandoSkills = false;
        console.log(this.skillsJSON);
      });
  }

  private cargarEducation(){
    this.httpClient.get('https://resumeangular-1a061.firebaseio.com/education.json')
      .subscribe( resp => {
        this.educationJSON = resp;
        this.cargandoEducation = false;

        console.log(this.educationJSON );
      });
  }
}
