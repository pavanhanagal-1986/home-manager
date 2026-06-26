import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StorageService {
  prefix = 'hm:';

  private key(name: string) {
    return `${this.prefix}${name}`;
  }

  get<T>(name: string): T[] {
    try {
      const raw = localStorage.getItem(this.key(name));
      if (!raw) return [];
      return JSON.parse(raw) as T[];
    } catch (e) {
      console.error('Storage get parse error', e);
      return [];
    }
  }

  set<T>(name: string, items: T[]) {
    localStorage.setItem(this.key(name), JSON.stringify(items));
  }

  add<T extends { id: string }>(name: string, item: T) {
    const items = this.get<T>(name);
    items.push(item);
    this.set(name, items);
  }

  update<T extends { id: string }>(name: string, id: string, patch: Partial<T>) {
    const items = this.get<T>(name);
    const idx = items.findIndex(i => (i as any).id === id);
    if (idx === -1) return false;
    items[idx] = { ...(items[idx] as any), ...(patch as any) } as T;
    this.set(name, items);
    return true;
  }

  remove(name: string, id: string) {
    const items = this.get<any>(name).filter(i => i.id !== id);
    this.set(name, items);
  }

  clearAll() {
    Object.keys(localStorage).forEach(k => {
      if (k.startsWith(this.prefix)) localStorage.removeItem(k);
    });
  }
}
