import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  imports: [TranslatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
 projects = [
    {
      name: 'PROJECTS.POKER.NAME',
      image: 'images/projects/poker-welcome-screen.png',
      description: 'PROJECTS.POKER.DESCRIPTION',
      github: 'https://github.com/KDG-Muhammet/IP2-Frontend-Game',
      showGithub: false,
      tech: [
        { name: 'React', icon: 'images/techs/React.svg' },
        { name: 'TypeScript', icon: 'images/techs/TypeScript.svg' },
        { name: 'Spring Boot', icon: 'images/techs/Spring.svg' },
        { name: 'Java', icon: 'images/techs/Java.svg' },
        { name: 'keycloak', icon: 'images/techs/Keycloak.svg' },
      ],
    },
    {
      name: 'PROJECTS.PORTFOLIO.NAME',
      image: 'images/projects/site.png',
      description: 'PROJECTS.PORTFOLIO.DESCRIPTION',
      github: 'https://github.com/KDG-Muhammet/muhammmetmurat',
      showGithub: true,
      tech: [
        { name: 'Angular', icon: 'images/techs/Angular.svg' },
        { name: 'TypeScript', icon: 'images/techs/TypeScript.svg' }
    ]
  },
    {
      name: 'PROJECTS.VR.NAME', 
      image: 'images/projects/vr.png',
      description: 'PROJECTS.VR.DESCRIPTION',
      github: 'https://github.com/KDG-Muhammet/VR-Application-Shift-Happens',
      showGithub: true,
      tech: [
        { name: 'Unity', icon: 'images/techs/Unity.svg' },
        { name: 'Blender', icon: 'images/techs/Blender.svg' },
        { name: 'C#', icon: 'images/techs/CSharp.svg' },
        { name: 'React', icon: 'images/techs/React.svg' },
        { name: 'TypeScript', icon: 'images/techs/TypeScript.svg' },
        { name: 'Tailwind CSS', icon: 'images/techs/Tailwind CSS.svg' },
        { name: 'Babylonjs ', icon: 'images/techs/Babylonjs.svg' },
        { name: 'supabase ', icon: 'images/techs/supabase-logo-icon.svg' },
      ],
    },
  ];

 selectedProject: any = null;

  openProject(project: any) {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeProject() {
    this.selectedProject = null;
    document.body.style.overflow = 'auto';
  }


}
