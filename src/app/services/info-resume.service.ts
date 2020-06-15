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

  experienceJSON;
  cargandoExperience = true;

  interestsJSON;
  cargandoInterests = true;

  constructor(private httpClient: HttpClient) {
    this.cargarPersonal();
    this.cargarSocialMedia();
    this.cargarSkills();
    this.cargarEducation();
    this.cargarExperience();
    this.cargarInterests();
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

        console.log( "this.educationJSON" );
        console.log( this.educationJSON );
      });
  }

  private cargarExperience(){
    this.httpClient.get('https://resumeangular-1a061.firebaseio.com/experience.json')
      .subscribe( resp => {
        this.experienceJSON = resp;
        this.cargandoExperience = false;
        console.log(this.experienceJSON);
      });
  }

  private cargarInterests(){
    this.httpClient.get('https://resumeangular-1a061.firebaseio.com/interests.json')
      .subscribe( resp => {
        this.interestsJSON = resp;
        this.cargandoInterests = false;
        console.log( this.interestsJSON );

      });
  }
}
