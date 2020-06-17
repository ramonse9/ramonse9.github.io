import { Component, OnInit } from '@angular/core';
import { InfoResumeService } from 'src/app/services/info-resume.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  constructor( public service: InfoResumeService ) { }

  ngOnInit(): void {
  }

}
