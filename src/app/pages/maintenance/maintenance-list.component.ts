import { Component, OnInit } from '@angular/core';
import { MaintenanceService } from '../../services/maintenance.service';
import { MaintenanceItem } from '../../core/data.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-maintenance-list',
  templateUrl: './maintenance-list.component.html'
})
export class MaintenanceListComponent implements OnInit {
  items$: Observable<MaintenanceItem[]>;

  constructor(private svc: MaintenanceService) {
    this.items$ = this.svc.list$;
  }

  ngOnInit(): void {}

  remove(id: string) {
    this.svc.remove(id);
  }
}
