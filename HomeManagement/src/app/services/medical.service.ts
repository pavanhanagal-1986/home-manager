import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MedicalRecord } from '../core/data.models';
import { StorageService } from '../core/storage.service';

@Injectable({ providedIn: 'root' })
export class MedicalService {
  private key = 'medical';
  private items$ = new BehaviorSubject<MedicalRecord[]>([]);
  public readonly list$ = this.items$.asObservable();

  constructor(private storage: StorageService) {
    const data = this.storage.get<MedicalRecord>(this.key);
    this.items$.next(data);
  }

  add(item: MedicalRecord) {
    item.createdAt = new Date().toISOString();
    this.storage.add<MedicalRecord>(this.key, item);
    this.items$.next(this.storage.get<MedicalRecord>(this.key));
  }

  update(id: string, patch: Partial<MedicalRecord>) {
    patch.updatedAt = new Date().toISOString();
    const ok = this.storage.update<MedicalRecord>(this.key, id, patch as Partial<MedicalRecord>);
    if (ok) this.items$.next(this.storage.get<MedicalRecord>(this.key));
    return ok;
  }

  remove(id: string) {
    this.storage.remove(this.key, id);
    this.items$.next(this.storage.get<MedicalRecord>(this.key));
  }
}
