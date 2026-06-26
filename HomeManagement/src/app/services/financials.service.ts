import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FinancialRecord } from '../core/data.models';
import { StorageService } from '../core/storage.service';

@Injectable({ providedIn: 'root' })
export class FinancialsService {
  private key = 'financials';
  private items$ = new BehaviorSubject<FinancialRecord[]>([]);
  public readonly list$ = this.items$.asObservable();

  constructor(private storage: StorageService) {
    const data = this.storage.get<FinancialRecord>(this.key);
    this.items$.next(data);
  }

  add(item: FinancialRecord) {
    item.createdAt = new Date().toISOString();
    this.storage.add<FinancialRecord>(this.key, item);
    this.items$.next(this.storage.get<FinancialRecord>(this.key));
  }

  update(id: string, patch: Partial<FinancialRecord>) {
    patch.updatedAt = new Date().toISOString();
    const ok = this.storage.update<FinancialRecord>(this.key, id, patch as Partial<FinancialRecord>);
    if (ok) this.items$.next(this.storage.get<FinancialRecord>(this.key));
    return ok;
  }

  remove(id: string) {
    this.storage.remove(this.key, id);
    this.items$.next(this.storage.get<FinancialRecord>(this.key));
  }
}
