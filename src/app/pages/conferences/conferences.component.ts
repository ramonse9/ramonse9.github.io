import { Component, OnInit } from '@angular/core';
import { InfoResumeService } from 'src/app/services/info-resume.service';

@Component({
  selector: 'app-conferences',
  templateUrl: './conferences.component.html'
})
export class ConferencesComponent implements OnInit {

  constructor(public service: InfoResumeService) { }

  ngOnInit(): void {
  }

}
