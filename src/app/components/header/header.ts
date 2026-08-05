import {Component, signal, inject } from '@angular/core';
import {TranslatePipe, TranslateDirective, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  private translate = inject(TranslateService);
  currentLanguage = 'en';

  useLanguage(language: string): void {
    
      this.currentLanguage = language;
      this.translate.use(language);
  }
} 
