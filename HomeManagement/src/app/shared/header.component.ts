import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: ['.header{display:flex;justify-content:space-between;align-items:center} .nav a{margin-left:12px;color:var(--muted);text-decoration:none}']
})
export class HeaderComponent {}
