import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Vehicle } from '../core/data.models';
import { StorageService } from '../core/storage.service';

@Injectable({ providedIn: 'root' })
export class VehiclesService {
  private key = 'vehicles';
  private items$ = new BehaviorSubject<Vehicle[]>([]);
  public readonly list$ = this.items$.asObservable();

  constructor(private storage: StorageService) {
    const data = this.storage.get<Vehicle>(this.key);
    this.items$.next(data);
  }

  add(item: Vehicle) {
    item.createdAt = new Date().toISOString();
    this.storage.add<Vehicle>(this.key, item);
    this.items$.next(this.storage.get<Vehicle>(this.key));
  }

  update(id: string, patch: Partial<Vehicle>) {
    patch.updatedAt = new Date().toISOString();
    const ok = this.storage.update<Vehicle>(this.key, id, patch as Partial<Vehicle>);
    if (ok) this.items$.next(this.storage.get<Vehicle>(this.key));
    return ok;
  }

  remove(id: string) {
    this.storage.remove(this.key, id);
    this.items$.next(this.storage.get<Vehicle>(this.key));
  }
}
