import { Component, OnInit, OnDestroy, signal, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Counter } from './counter/counter';
import { VelocityControl } from './velocity/velocity';
import { SnapshotTable } from './snapshot-table/snapshot-table';
import { LanguageSwitcherComponent } from './language-switcher/language-switcher';
import { TranslationService } from './translation.service';
import { ConfirmPopup } from './confirm-popup/confirm-popup';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, Counter, VelocityControl, SnapshotTable, LanguageSwitcherComponent,ConfirmPopup],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  translationService = inject(TranslationService);

  counter = signal(0);
  velocity = signal(1);
  velocityInput = signal(1);
  snapshots = signal<{ timestamp: Date, counterValue: number, velocity: number }[]>([]);
showConfirmDialog = signal(false);
  private intervalId: any;
  private lastUpdateTime = Date.now();

  ngOnInit() {
    this.startCounter();
  }

  ngOnDestroy() {
    this.stopCounter();
  }

  startCounter() {
    this.stopCounter();
    this.lastUpdateTime = Date.now();
    this.intervalId = setInterval(() => {
      const now = Date.now();
      const delta = (now - this.lastUpdateTime) / 1000;
      this.counter.update(c => c + this.velocity() * delta);
      this.lastUpdateTime = now;
    }, 50);
  }

  stopCounter() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  changeVelocity(step: number) {
    this.velocity.update(v => v + step);
    this.velocityInput.set(this.velocity());
  }

  updateVelocityFromInput(value: number) {
    this.velocity.set(value);
    this.velocityInput.set(value);
  }

  takeSnapshot() {
    const snap = { timestamp: new Date(), counterValue: this.counter(), velocity: this.velocity() };
    this.snapshots.update(s => [snap, ...s]);
  }

  refreshSnapshot() {
    this.showConfirmDialog.set(true);
  }

  onConfirmRefresh() {
    this.snapshots.set([]);
    this.showConfirmDialog.set(false);
  }

  onCancelRefresh() {
    this.showConfirmDialog.set(false);
  }

  translate = (key: string) => this.translationService.translations()[key];
}
