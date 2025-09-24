import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';

import { TranslationService } from '../translation.service';
@Component({
  selector: 'app-confirm-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirm-popup.html',
  styleUrl: './confirm-popup.scss'
})
export class ConfirmPopup {
  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();
  translationService = inject(TranslationService);
  onConfirm() {
    this.confirm.emit();
  }

  onCancel() {
    this.cancel.emit();
  }
  

  translate = (key: string) => this.translationService.translations()[key];
}
