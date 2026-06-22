import { Component } from '@angular/core';
import { PROJECTS } from '../data/projects-data';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projectList = PROJECTS;
}
