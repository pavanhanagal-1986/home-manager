import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MaintenanceItem } from '../core/data.models';
import { StorageService } from '../core/storage.service';

@Injectable({ providedIn: 'root' })
export class MaintenanceService {
  private key = 'maintenance';
  private items$ = new BehaviorSubject<MaintenanceItem[]>([]);
  public readonly list$ = this.items$.asObservable();

  constructor(private storage: StorageService) {
    const data = this.storage.get<MaintenanceItem>(this.key);
    this.items$.next(data);
  }

  add(item: MaintenanceItem) {
    item.createdAt = new Date().toISOString();
    this.storage.add<MaintenanceItem>(this.key, item);
    this.items$.next(this.storage.get<MaintenanceItem>(this.key));
  }

  update(id: string, patch: Partial<MaintenanceItem>) {
    patch.updatedAt = new Date().toISOString();
    const ok = this.storage.update<MaintenanceItem>(this.key, id, patch as Partial<MaintenanceItem>);
    if (ok) this.items$.next(this.storage.get<MaintenanceItem>(this.key));
    return ok;
  }

  remove(id: string) {
    this.storage.remove(this.key, id);
    this.items$.next(this.storage.get<MaintenanceItem>(this.key));
  }
}
