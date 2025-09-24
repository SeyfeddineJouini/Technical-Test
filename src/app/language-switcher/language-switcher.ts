import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './language-switcher.html',
  styleUrls: ['./language-switcher.scss']
})
export class LanguageSwitcherComponent {
  translationService = inject(TranslationService);

 languages = [
    { code: 'en', label: 'EN', flag: '🇬🇧' },
    { code: 'fr', label: 'FR', flag: '🇫🇷' }
  ];

  async changeLanguage(lang: string) {
    await this.translationService.switchLanguage(lang);
  }
}
