import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    //Using ngIf to toggle text display
    showText: boolean = false;
    toggleText() {
      this.showText = !this.showText;
    }

    staff = [ 
      { firstName: 'Joseph', lastName: 'Diaz', email: 'joseph.diaz@test.com', role: 'User' },   
      { firstName: 'James', lastName: 'Reynolds', email: 'james.reynolds@test.com', role: 'Admin' }, 
      { firstName: 'Djoan', lastName: 'Jaworski', email: 'djoan.jaworski@test.com', role: 'Admin' }, 
      { firstName: 'Maria', lastName: 'Garcia', email: 'maria.garcia@test.com', role: 'User' }, 
      { firstName: 'Jay', lastName: 'Bernardo', email: 'jay.bernardo@test.com', role: 'User' } 
      ];
}
