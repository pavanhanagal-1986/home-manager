import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { VehiclesService } from '../../services/vehicles.service';

@Component({
  selector: 'app-vehicles-edit',
  templateUrl: './vehicles-edit.component.html'
})
export class VehiclesEditComponent implements OnInit {
  form: FormGroup;
  editingId?: string;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private svc: VehiclesService) {
    this.form = this.fb.group({
      make: ['', Validators.required],
      model: ['', Validators.required],
      year: [''],
      mileage: [''],
      vin: [''],
      lastServiceDate: [''],
      notes: ['']
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && id !== 'new') {
      this.editingId = id;
      this.svc.list$.subscribe(list => {
        const item = list.find(i => i.id === id);
        if (item) this.form.patchValue(item as any);
      });
    }
  }

  save() {
    if (this.form.invalid) return;
    const payload = this.form.value;
    if (this.editingId) {
      this.svc.update(this.editingId, payload);
    } else {
      this.svc.add({ id: uuidv4(), ...payload, createdAt: new Date().toISOString() } as any);
    }
    this.router.navigate(['/vehicles']);
  }
}
