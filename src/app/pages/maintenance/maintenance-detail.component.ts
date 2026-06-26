import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MaintenanceItem } from '../../core/data.models';
import { MaintenanceService } from '../../services/maintenance.service';

@Component({
  selector: 'app-maintenance-detail',
  templateUrl: './maintenance-detail.component.html'
})
export class MaintenanceDetailComponent implements OnInit {
  item?: MaintenanceItem;

  constructor(private route: ActivatedRoute, private router: Router, private svc: MaintenanceService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;
    this.svc.list$.subscribe(list => {
      this.item = list.find(i => i.id === id);
      if (!this.item) this.router.navigate(['/maintenance']);
    });
  }
}
