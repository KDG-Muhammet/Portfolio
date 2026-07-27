import { Component } from '@angular/core';
import { About } from '../components/about/about';
import { Contact } from '../components/contact/contact';
import { Skills } from '../components/skills/skills';
import { Projects } from '../components/projects/projects';
import { Intro } from '../components/intro/intro';

@Component({
  selector: 'app-home',
  imports: [About, Contact, Skills, Projects, Intro],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
 
}
