import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { TranslationService } from '../translation.service';
@Component({
  selector: 'app-counter',
  standalone: true,  
  imports: [CommonModule],
  templateUrl: './counter.html',
  styleUrl: './counter.scss'
})
export class Counter {

  translationService = inject(TranslationService);
  @Input() value!: number;

  
translate = (key: string) => this.translationService.translations()[key];
}
