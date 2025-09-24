import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-snapshot-table',
  standalone: true,  
  imports: [CommonModule, NgxPaginationModule],
  templateUrl: './snapshot-table.html',
  styleUrls: ['./snapshot-table.scss']
})
export class SnapshotTable {
  @Input() snapshots: { timestamp: Date; counterValue: number; velocity: number }[] = [];
  page = 1;

  // Inject translation service
  translationService = inject(TranslationService);

  // Optional helper for template
  translate = (key: string) => this.translationService.translations()[key];
}
