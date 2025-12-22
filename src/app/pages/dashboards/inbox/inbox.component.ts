import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inbox',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.scss'
})

export class InboxComponent {



// activeTopTab: string = 'attendance'; // default screen
activeTopTab: any = 'attendance';
activeTab: string = 'letters';      // sub-tab under Employee Requests

leaveActionScreen: boolean = false;
takeActionScreen: boolean = false;


constructor() {
    this.activeTopTab = 'attendance'; // initialize
  }

  openLeaveAction() {
    this.leaveActionScreen = true;
  }

  closeLeaveAction() {
    this.leaveActionScreen = false;
  }

  openTakeAction() {
    this.takeActionScreen = true;
    
  }

  closeTakeAction() {
    this.takeActionScreen = false;
  }


viewLeaveDetails: boolean = false;

openViewDetails(){
  this.viewLeaveDetails = true;
  this.leaveActionScreen = false;
}
closeViewDetails(){
  this.viewLeaveDetails = false;
}

financeTab: string = 'reimbursement'; 

loanRequests = [
  {
    type: 'Home Loan',
    amount: 'INR 1,000,000.00',
    name: 'Paramesh Ganavena',
    appliedOn: '28/08/2024, 04:40 AM',
    status: 'Pending'
  }
];
reimbursementRequests = [
  {
    type: 'Travel Reimbursement',
    subType: 'Flight Ticket',
    amount: 'INR 12,500',
    name: 'Paramesh Ganavena',
    appliedOn: '27/08/2024, 02:10 PM',
    status: 'Pending'
  }
];

loanRepaymentRequests = [
  {
    type: 'Loan Repayment - Home Loan',
    amount: 'INR 20,000 EMI',
    name: 'Paramesh Ganavena',
    appliedOn: '28/08/2024, 01:15 PM',
    status: 'Approved'
  }
];

salaryAdvanceRequests = [
  {
    type: 'Salary Advance',
    amount: 'INR 25,000',
    name: 'Paramesh Ganavena',
    appliedOn: '29/08/2024, 11:00 AM',
    status: 'Pending'
  }
];

salaryAdvanceRepayRequests = [
  {
    type: 'Salary Advance Repayment',
    amount: 'INR 10,000',
    name: 'Paramesh Ganavena',
    appliedOn: '30/08/2024, 10:00 AM',
    status: 'Rejected'
  }
];



attendanceTab: string = 'leave';


overtimeViewDetails: boolean = false;
overtimeAction: boolean = false;


openOvertimeViewDetails() {
  this.overtimeViewDetails = true;
  this.overtimeAction = false;
}

openOvertimeAction() {
  this.overtimeAction = true;
  this.overtimeViewDetails = false;
}

closeOvertimeScreens() {
  this.overtimeViewDetails = false;
  this.overtimeAction = false;
}


compOffView: boolean = false;
compOffAction: boolean = false;

openCompOffView() {
  this.compOffView = true;
  this.compOffAction = false;
}
openCompOffAction() {
  this.compOffAction = true;
  this.compOffView = false;
}
closeCompOffScreens() {
  this.compOffView = false;
  this.compOffAction = false;
}

wfhView: boolean = false;
wfhAction: boolean = false;

openWfhView() {
  this.wfhView = true;
  this.wfhAction = false;
}

openWfhAction() {
  this.wfhAction = true;
  this.wfhView = false;
}

closeWfhScreens() {
  this.wfhView = false;
  this.wfhAction = false;
}

optionalView: boolean = false;
optionalAction: boolean = false;

openOptionalView() {
  this.optionalView = true;
  this.optionalAction = false;
}

openOptionalAction() {
  this.optionalAction = true;
  this.optionalView = false;
}

closeOptionalScreens() {
  this.optionalView = false;
  this.optionalAction = false;
}

reimView: boolean = false;
reimAction: boolean = false;

openReimView() {
  this.reimView = true;
  this.reimAction = false;
}

openReimAction() {
  this.reimAction = true;
  this.reimView = false;
}

closeReimScreens() {
  this.reimView = false;
  this.reimAction = false;
}

salaryAdvanceView = false;
salaryAdvanceAction = false;

openSalaryAdvanceView() {
  this.salaryAdvanceView = true;
  this.salaryAdvanceAction = false;
}

openSalaryAdvanceAction() {
  this.salaryAdvanceAction = true;
  this.salaryAdvanceView = false;
}

closeSalaryAdvanceScreens() {
  this.salaryAdvanceView = false;
  this.salaryAdvanceAction = false;
}

showSearchBar: boolean = false;
toggleSearchbar() {
  this.showSearchBar = !this.showSearchBar; 
}

selectedStatus = '';
selectedPunchType = '';
// selectedLeaveType = '';
selectedOvertimeType = '';
selectedPolicy = '';
selectedReimType = '';
selectedEntity = '';


selectedPunchStatus = '';
selectedOvertimeStatus = '';
selectedWfhStatus = '';
selectedWfhType = '';
selectedOptionalType = '';
selectedOptionalStatus = '';
selectedReimEntity = '';
selectedReimStatus = '';

resetFilters() {
  // Leave
  this.selectedLeaveType = '';
  this.selectedLeaveStatus = '';

  // Punch
  this.selectedPunchType = '';
  this.selectedPunchStatus = '';
  

  // Overtime
  this.selectedOvertimeType = '';
  this.selectedOvertimeStatus = '';

  // WFH
  this.selectedWfhType = '';
  this.selectedWfhStatus = '';

  // Optional Holiday
  this.selectedOptionalType = '';
  this.selectedOptionalStatus = '';

  // Finance – Reimbursement
  this.selectedReimType = '';
  this.selectedReimEntity = '';
  this.selectedReimStatus = '';

  // Finance – Salary Advance
  // this.selectedPolicy = '';
  // this.selectedSalaryAdvanceStatus = '';
}

selectedLeaveType = '';
selectedLeaveStatus = '';



}
