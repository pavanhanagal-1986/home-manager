import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicalRecord } from '../../core/data.models';
import { MedicalService } from '../../services/medical.service';

@Component({
  selector: 'app-medical-detail',
  templateUrl: './medical-detail.component.html'
})
export class MedicalDetailComponent implements OnInit {
  item?: MedicalRecord;

  constructor(private route: ActivatedRoute, private router: Router, private svc: MedicalService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;
    this.svc.list$.subscribe(list => {
      this.item = list.find(i => i.id === id);
      if (!this.item) this.router.navigate(['/medical']);
    });
  }
}
