import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Projects } from './projects/projects';
import { ProjectDescription } from './project-description/project-description';

const routes: Routes = [
  { path: "", component: Home },
  { path: "projects", component: Projects },
  { path: "projects/:id", component: ProjectDescription }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
