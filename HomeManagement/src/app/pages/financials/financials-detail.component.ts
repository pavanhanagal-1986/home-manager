import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FinancialRecord } from '../../core/data.models';
import { FinancialsService } from '../../services/financials.service';

@Component({
  selector: 'app-financials-detail',
  templateUrl: './financials-detail.component.html'
})
export class FinancialsDetailComponent implements OnInit {
  item?: FinancialRecord;

  constructor(private route: ActivatedRoute, private router: Router, private svc: FinancialsService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;
    this.svc.list$.subscribe(list => {
      this.item = list.find(i => i.id === id);
      if (!this.item) this.router.navigate(['/financials']);
    });
  }
}
