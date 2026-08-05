import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  imports: [TranslatePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {

  // Skills data not needed yet
 skills = [
    { name: 'Java', icon: '/images/techs/Java.svg', desc: 'Backend language' },
    { name: 'Spring Boot', icon: '/images/techs/Spring.svg', desc: 'Java backend framework' },
    { name: 'React', icon: '/images/techs/React.svg', desc: 'Frontend library' },
    { name: 'TypeScript', icon: '/images/techs/TypeScript.svg', desc: 'Typed JavaScript' },
    { name: 'Tailwind CSS', icon: '/images/techs/Tailwind CSS.svg', desc: 'CSS framework' },
    { name: '.NET Core', icon: '/images/techs/.NET Core.svg', desc: 'Web backend framework' },
    { name: 'HTML5', icon: '/images/techs/HTML5.svg', desc: 'Structure & semantics' },
    { name: 'CSS3', icon: '/images/techs/CSS3.svg', desc: 'Styling & design' },
  ];

}
