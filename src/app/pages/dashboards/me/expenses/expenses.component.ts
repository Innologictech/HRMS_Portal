import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDatepickerConfig, BsDatepickerModule } from 'ngx-bootstrap/datepicker';

interface Expense {
  type: string;
  amount: number;
  requestedOn: string;
  status: 'Approved' | 'Pending' | 'Rejected';
  approver: string;
}

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [CommonModule, FormsModule, BsDatepickerModule],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.scss'
})
export class ExpensesComponent {

  // ===== Filters =====
  selectedStatus: string = 'All';
  selectedExpense: string = '';
  searchText: string = '';

  // ===== Datepicker Config =====
  bsConfig: Partial<BsDatepickerConfig>;

  // ===== Dropdown Data =====
  expenseOptions: string[] = [
    'Petrol Allowance',
    'Internet Allowance',
    'Food Allowance',
    'Others'
  ];

  statusOptions: string[] = [
    'All',
    'Approved',
    'Pending',
    'Rejected'
  ];

  // ===== Table Data =====
  expenses: Expense[] = [
    {
      type: 'Petrol Allowance',
      amount: 500,
      requestedOn: '28-Aug-24 4:40:12 AM',
      status: 'Approved',
      approver: 'Paramesh Ganavena'
    }
  ];

  // ===== UI State =====
  showAddExpenseForm = false;
  isConfirmed = false;

  constructor() {
    this.bsConfig = {
      dateInputFormat: 'DD-MMM-YYYY',
      showWeekNumbers: false,
      isAnimated: true
    };
  }

  // ===== Filtered Result =====
  get filteredExpenses(): Expense[] {
    return this.expenses.filter(exp => {

      const statusMatch =
        this.selectedStatus === 'All' ||
        exp.status === this.selectedStatus;

      const expenseMatch =
        !this.selectedExpense ||
        exp.type === this.selectedExpense;

      const searchMatch =
        !this.searchText ||
        exp.type.toLowerCase().includes(this.searchText.toLowerCase()) ||
        exp.approver.toLowerCase().includes(this.searchText.toLowerCase());

      return statusMatch && expenseMatch && searchMatch;
    });
  }

  // ===== Actions =====
  viewDetails(expense: Expense) {
    console.log('View details:', expense);
  }

  openAddExpense() {
    console.log('PLUS CLICKED');
    this.showAddExpenseForm = true;
  }

  closeAddExpense() {
    this.showAddExpenseForm = false;
    this.isConfirmed = false;
  }

  submitExpense() {
    console.log('Expense submitted');
  }
}
