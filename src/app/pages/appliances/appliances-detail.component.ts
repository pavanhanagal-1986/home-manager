import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appliance } from '../../core/data.models';
import { AppliancesService } from '../../services/appliances.service';

@Component({
  selector: 'app-appliances-detail',
  templateUrl: './appliances-detail.component.html'
})
export class AppliancesDetailComponent implements OnInit {
  item?: Appliance;

  constructor(private route: ActivatedRoute, private router: Router, private svc: AppliancesService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;
    this.svc.list$.subscribe(list => {
      this.item = list.find(i => i.id === id);
      if (!this.item) this.router.navigate(['/appliances']);
    });
  }
}
