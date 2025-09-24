import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly STORAGE_KEY = 'app-language';
  public translations = signal<{ [key: string]: string }>({});
  public currentLanguage = signal('en');

  constructor(private http: HttpClient) {
    
    const savedLang = this.getSavedLanguage();
    this.loadTranslations(savedLang);
  }

  private getSavedLanguage(): string {
    if (typeof window !== 'undefined' && localStorage) {
      return localStorage.getItem(this.STORAGE_KEY) || 'en';
    }
    return 'en';
  }

  private saveLanguage(lang: string) {
    if (typeof window !== 'undefined' && localStorage) {
      localStorage.setItem(this.STORAGE_KEY, lang);
    }
  }

  async loadTranslations(lang: string) {
    try {
      const data = await firstValueFrom(
        this.http.get<{ [key: string]: string }>(`assets/languages/${lang}.json`)
      );
      this.translations.set(data);
      this.currentLanguage.set(lang);
      this.saveLanguage(lang); 
    } catch (err) {
      console.error('Error loading translations:', err);
    }
  }

  async switchLanguage(lang: string) {
    await this.loadTranslations(lang);
  }

  translate(key: string): string {
    const t = this.translations();
    return t[key] || key;
  }
}
