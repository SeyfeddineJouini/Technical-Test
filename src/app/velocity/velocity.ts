import { CommonModule } from '@angular/common';
import { Component, input, output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-velocity',
  standalone: true,
  templateUrl: './velocity.html',
  styleUrls: ['./velocity.scss'],
  imports: [CommonModule, FormsModule], 
})
export class VelocityControl {
  velocity = input.required<number>();
  inputValue = input.required<number>();

  velocityChange = output<number>();
  update = output<number>();

  // Inject translation service
  translationService = inject(TranslationService);

  // Optional helper for template
  translate = (key: string) => this.translationService.translations()[key];
}
