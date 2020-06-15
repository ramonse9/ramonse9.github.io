import { Component, OnInit } from '@angular/core';
import { InfoResumeService } from 'src/app/services/info-resume.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(public service: InfoResumeService) { }

  ngOnInit(): void {
  }

}
