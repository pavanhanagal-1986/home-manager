export interface BaseEntity {
  id: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Appliance extends BaseEntity {
  name: string;
  brand?: string;
  model?: string;
  purchaseDate?: string;
  warrantyUntil?: string;
  location?: string;
  notes?: string;
  status?: 'working' | 'needs-repair' | 'disposed';
}

export interface Vehicle extends BaseEntity {
  make: string;
  model: string;
  year?: number;
  registration?: string;
  vin?: string;
  mileage?: number;
  lastServiceDate?: string;
  notes?: string;
}

export interface MaintenanceItem extends BaseEntity {
  title: string;
  description?: string;
  recurrence?: string; // e.g. 'monthly', 'yearly', '30d'
  nextDue?: string;
  assignedTo?: string;
  status?: 'pending' | 'done' | 'skipped';
}

export interface FinancialRecord extends BaseEntity {
  type: 'bill' | 'subscription' | 'expense' | 'income';
  title: string;
  amount: number;
  currency?: string;
  dueDate?: string;
  recurring?: boolean;
  notes?: string;
}

export interface MedicalRecord extends BaseEntity {
  person: string;
  type: 'prescription' | 'appointment' | 'allergy' | 'immunization';
  date?: string;
  provider?: string;
  notes?: string;
}
