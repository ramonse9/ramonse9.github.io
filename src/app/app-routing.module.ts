import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { EducationComponent } from './pages/education/education.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { InterestsComponent } from './pages/interests/interests.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ConferencesComponent } from './pages/conferences/conferences.component';

const APP_ROUTES: Routes = [
    { path: 'me', component: AboutComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'certifications', component: EducationComponent },
    { path: 'conferences', component: ConferencesComponent },
    { path: 'interests', component: InterestsComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'me'}
];

@NgModule({
    imports: [
        RouterModule.forRoot( APP_ROUTES, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}