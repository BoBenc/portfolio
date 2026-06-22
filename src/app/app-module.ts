import { CUSTOM_ELEMENTS_SCHEMA, NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './navbar/navbar';
import { Home } from './home/home';
import { Footer } from './footer/footer';
import { Projects } from './projects/projects';
import { ProjectDescription } from './project-description/project-description';

@NgModule({
  declarations: [App, Navbar, Home, Footer, Projects, ProjectDescription],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
