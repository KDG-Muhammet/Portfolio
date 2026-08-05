import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-intro',
  imports: [TranslatePipe],
  templateUrl: './intro.html',
  styleUrl: './intro.css'
})
export class Intro {

}
