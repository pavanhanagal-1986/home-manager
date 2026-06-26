import { Component, OnInit } from '@angular/core';
import { FinancialsService } from '../../services/financials.service';
import { FinancialRecord } from '../../core/data.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-financials-list',
  templateUrl: './financials-list.component.html'
})
export class FinancialsListComponent implements OnInit {
  items$: Observable<FinancialRecord[]>;

  constructor(private svc: FinancialsService) {
    this.items$ = this.svc.list$;
  }

  ngOnInit(): void {}

  remove(id: string) {
    this.svc.remove(id);
  }
}
