import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapshotTable } from './snapshot-table';

describe('SnapshotTable', () => {
  let component: SnapshotTable;
  let fixture: ComponentFixture<SnapshotTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnapshotTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnapshotTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
