import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from '../../core/data.models';
import { VehiclesService } from '../../services/vehicles.service';

@Component({
  selector: 'app-vehicles-detail',
  templateUrl: './vehicles-detail.component.html'
})
export class VehiclesDetailComponent implements OnInit {
  item?: Vehicle;

  constructor(private route: ActivatedRoute, private router: Router, private svc: VehiclesService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;
    this.svc.list$.subscribe(list => {
      this.item = list.find(i => i.id === id);
      if (!this.item) this.router.navigate(['/vehicles']);
    });
  }
}
