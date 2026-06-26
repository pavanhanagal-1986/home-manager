import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { MedicalService } from '../../services/medical.service';

@Component({
  selector: 'app-medical-edit',
  templateUrl: './medical-edit.component.html'
})
export class MedicalEditComponent implements OnInit {
  form: FormGroup;
  editingId?: string;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private svc: MedicalService) {
    this.form = this.fb.group({
      person: ['', Validators.required],
      type: ['prescription', Validators.required],
      date: [''],
      provider: [''],
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
    this.router.navigate(['/medical']);
  }
}
