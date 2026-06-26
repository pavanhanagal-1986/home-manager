import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../../services/vehicles.service';
import { Vehicle } from '../../core/data.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html'
})
export class VehiclesListComponent implements OnInit {
  vehicles$: Observable<Vehicle[]>;

  constructor(private svc: VehiclesService) {
    this.vehicles$ = this.svc.list$;
  }

  ngOnInit(): void {}

  remove(id: string) {
    this.svc.remove(id);
  }
}
