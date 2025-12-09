import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


interface LeaveBalance {
  type: string;
  available: any;        // Can be number or string (like '∞')
  availableStr?: string; // Formatted string for display
  consumed: number;
  accrualSoFar: string;
  annualQuota: string;
  dataPresent: boolean;  // Determines if the Gauge is shown or "No data"
  percentage?: number;   // For the teal circle gauge (0-100)
}

@Component({
  selector: 'app-leave',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss']
})

export class LeaveComponent implements OnInit {


  // Data matching the 4 cards in your screenshot
  leaveBalances: LeaveBalance[] = [
    {
      type: 'Casual Leave',
      available: 0,
      consumed: 0,
      accrualSoFar: '0 day',
      annualQuota: '3.5 days',
      dataPresent: false,
    },
    {
      type: 'Earned Leave',
      available: 0,
      consumed: 0,
      accrualSoFar: '0 day',
      annualQuota: '4.67 days',
      dataPresent: false,
    },
    {
      type: 'Sick Leave',
      available: 5.83,
      availableStr: '5.83 Days',
      consumed: 0,
      accrualSoFar: '5.83 days',
      annualQuota: '5.83 days',
      dataPresent: true,
      percentage: 100, // 100% full circle as per image
    },
    {
      type: 'Unpaid Leave',
      available: '∞',
      availableStr: '∞',
      consumed: 0,
      accrualSoFar: '∞',
      annualQuota: '', // Empty in screenshot
      dataPresent: false,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
// Add this TypeScript method to handle the click
  viewDetails(balance: any): void {
    console.log('Viewing details for:', balance.type);
    // You can add your logic here, e.g., open a dialog or navigate to a page
    // alert('Clicked view details for ' + balance.type); 
  }


}

