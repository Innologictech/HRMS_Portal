
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BsDatepickerConfig, BsDatepickerModule } from 'ngx-bootstrap/datepicker';



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
  selector: 'app-employee-leaves',
  standalone: true,
  imports: [CommonModule,FormsModule,BsDatepickerModule],
  templateUrl: './employee-leaves.component.html',
  styleUrl: './employee-leaves.component.scss'
})
export class EmployeeLeavesComponent {

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
bsConfig: Partial<BsDatepickerConfig>|undefined;

  constructor() { }

  ngOnInit(): void {
  }
  // Add this TypeScript method to handle the click
  viewDetails(balance: any): void {
    console.log('Viewing details for:', balance.type);
    // You can add your logic here, e.g., open a dialog or navigate to a page
    // alert('Clicked view details for ' + balance.type); 
  }


  showRequest = false;

  leave = {
    from: '',
    to: '',
    days: 0,
    type: '',
    note: '',
    notify: ''
  };

  openRequest() {
    this.showRequest = true;
  }

  closeRequest() {
    this.showRequest = false;
  }

  submitRequest() {
   console.log("Request Leave:", this.leave);
    alert("Clicked");
    this.closeRequest();
  }

  selectedFile: File | null = null;

onFileSelected(event: any) {
  const file = event.target.files[0];
  this.selectedFile = file;
  console.log("Selected file:", this.selectedFile);

}
cancelFile(fileInput: any) {
  this.selectedFile = null;
  fileInput.value = '';  // clears file input
}




}






