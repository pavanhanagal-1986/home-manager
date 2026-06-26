import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Appliance } from '../core/data.models';
import { StorageService } from '../core/storage.service';

@Injectable({ providedIn: 'root' })
export class AppliancesService {
  private key = 'appliances';
  private items$ = new BehaviorSubject<Appliance[]>([]);
  public readonly list$ = this.items$.asObservable();

  constructor(private storage: StorageService) {
    const data = this.storage.get<Appliance>(this.key);
    this.items$.next(data);
  }

  add(item: Appliance) {
    item.createdAt = new Date().toISOString();
    this.storage.add<Appliance>(this.key, item);
    this.items$.next(this.storage.get<Appliance>(this.key));
  }

  update(id: string, patch: Partial<Appliance>) {
    patch.updatedAt = new Date().toISOString();
    const ok = this.storage.update<Appliance>(this.key, id, patch as Partial<Appliance>);
    if (ok) this.items$.next(this.storage.get<Appliance>(this.key));
    return ok;
  }

  remove(id: string) {
    this.storage.remove(this.key, id);
    this.items$.next(this.storage.get<Appliance>(this.key));
  }

  seed(samples: Appliance[]) {
    this.storage.set<Appliance>(this.key, samples);
    this.items$.next(samples);
  }
}
