import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PROJECTS } from '../data/projects-data';

@Component({
  selector: 'app-project-description',
  standalone: false,
  templateUrl: './project-description.html',
  styleUrl: './project-description.css',
})
export class ProjectDescription {
  currentProject: any;
  currentMediaIndex: number = 0; 

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.currentProject = PROJECTS.find(p => p.id === id);
    this.currentMediaIndex = 0; 
  }

  nextMedia() {
    if (this.currentProject && this.currentProject.media) {
      this.currentMediaIndex = (this.currentMediaIndex + 1) % this.currentProject.media.length;
    }
  }

  prevMedia() {
    if (this.currentProject && this.currentProject.media) {
      this.currentMediaIndex = (this.currentMediaIndex - 1 + this.currentProject.media.length) % this.currentProject.media.length;
    }
  }

  goToMedia(index: number) {
    this.currentMediaIndex = index;
  }

  isVideo(url: string): boolean {
    if (!url) return false;
    return url.toLowerCase().endsWith('.mp4') || url.toLowerCase().endsWith('.webm');
  }

  is3DModel(url: string): boolean {
    if (!url) return false;
    return url.toLowerCase().endsWith('.glb') || url.toLowerCase().endsWith('.gltf');
  }
}