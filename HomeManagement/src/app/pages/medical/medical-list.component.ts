import { Component, OnInit } from '@angular/core';
import { MedicalService } from '../../services/medical.service';
import { MedicalRecord } from '../../core/data.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-medical-list',
  templateUrl: './medical-list.component.html'
})
export class MedicalListComponent implements OnInit {
  items$: Observable<MedicalRecord[]>;

  constructor(private svc: MedicalService) {
    this.items$ = this.svc.list$;
  }

  ngOnInit(): void {}

  remove(id: string) {
    this.svc.remove(id);
  }
}
