import { Component, OnInit } from '@angular/core';
import { AppliancesService } from '../../services/appliances.service';
import { Appliance } from '../../core/data.models';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-appliances-list',
  templateUrl: './appliances-list.component.html'
})
export class AppliancesListComponent implements OnInit {
  appliances$: Observable<Appliance[]>;

  constructor(private svc: AppliancesService) {
    this.appliances$ = this.svc.list$;
  }

  ngOnInit(): void {}

  remove(id: string) {
    this.svc.remove(id);
  }

  seedSample() {
    const sample: Appliance = { id: uuidv4(), name: 'Sample Fridge', brand: 'Acme', model: 'F-100', createdAt: new Date().toISOString() };
    this.svc.add(sample);
  }
}
