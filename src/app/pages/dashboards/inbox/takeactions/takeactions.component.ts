import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-takeactions',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './takeactions.component.html',
  styleUrl: './takeactions.component.scss'
})
export class TakeactionsComponent {
  pendingTasks: any[]=[
    {id:1, Name: "Assets", count:1},
    {id:2, Name: "IT Support", count:2},
    {id:3, Name: "HR Requests", count:3},
    {id:4, Name: "Finance Approvals", count:4}, 
  ]

  assets: any[]=[
   {
      id: 101,
      name: 'Sunil Kumar Akula',
      initials: 'SK',
      assetTitle: 'Dell',
      desc: 'Asset Acknowledgement request',
      time: '10 months ago',
      details: {
        assetName: 'Dell',
        assetId: '00331-10000-00001-AA830',
        location: 'Hyderabad',
        type: 'Laptop',
        category: 'Computer Hardware',
        condition: 'Fair',
        raisedOn: '23 Jan 2025 12:11 pm',
      },
      comments: []
    },
   
  ];

  itSupport = [
  {
    id: 201,
    initials: 'JD',
    name: 'John Doe',
    title: 'Laptop Not Booting',
    desc: 'Issue reported by employee',
    time: '5 hours ago',
    details: {
      issueType: 'Hardware',
      priority: 'High',
      assignedTo: 'IT Engineer',
      description: 'System not powering on',
      raisedOn: '23 Jan 2025 09:14 am'
    },
    comments: []
  }
];


hrRequests = [
  {
    id: 301,
    initials: 'AR',
    name: 'Arun Reddy',
    title: 'Leave Request',
    desc: 'Leave application submitted',
    time: '1 day ago',
    details: {
      leaveType: 'Casual Leave',
      days: 2,
      from: '24 Jan 2025',
      to: '25 Jan 2025',
      raisedOn: '23 Jan 2025 10:15 am',
      status: 'Waiting for approval'
    },
    comments: []
  },
  {
    id: 302,
    initials: 'PK',
    name: 'Priya Kumari',
    title: 'Attendance Correction',
    desc: 'Incorrect in-time update request',
    time: '3 days ago',
    details: {
      date: '22 Jan 2025',
      reason: 'Missed punch',
      raisedOn: '22 Jan 2025 04:22 pm',
      status: 'Pending'
    },
    comments: []
  }
];


financeApprovals = [
  {
    id: 401,
    initials: 'MS',
    name: 'Manish Sharma',
    title: 'Expense Claim',
    desc: 'Claim reimbursement submitted',
    time: '3 days ago',
    details: {
      amount: 2300,
      purpose: 'Client Meeting Lunch',
      raisedOn: '20 Jan 2025 01:45 pm',
      status: 'Pending'
    },
    comments: []
  },
  {
    id: 402,
    initials: 'RK',
    name: 'Rohit Kumar',
    title: 'Travel Reimbursement',
    desc: 'Trip expenses submission',
    time: '5 days ago',
    details: {
      amount: 5400,
      purpose: 'Outstation Travel',
      raisedOn: '18 Jan 2025 05:12 pm',
      status: 'Pending'
    },
    comments: []
  }
];


  selectedTask: any = null;
  selectedAsset:any = null;
  selectedAssetDetails: any = null;

  // openTask(task:any){
  //   this.selectedTask = task;
  //   this.selectedAsset =null;
  //   this.selectedAssetDetails = null;
  // }
  openTask(task: any) {
  if (this.selectedTask?.id === task.id) {
    // Toggle off
    this.selectedTask = null;
    this.selectedAsset = null;
    return;
  }

  // Open the task
  this.selectedTask = task;
  this.selectedAsset = null;

   switch (task.Name) {

    case 'Assets':
      console.log("Load assets...");
      break;

    case 'IT Support':
      console.log("Load IT Support tickets...");
      break;

    case 'HR Requests':
      console.log("Load HR Requests...");
      break;

    case 'Finance Approvals':
      console.log("Load Finance Approvals...");
      break;

  }
}


  // openAsset(asset:any){
  //   this.selectedAsset =asset;
  // }

openAsset(asset: any) {

  // If user clicks the same asset → hide right column
  if (this.selectedAsset?.id === asset.id) {
    this.selectedAsset = null;
    return;
  }

  // Otherwise open it
  this.selectedAsset = asset;
}

  openAssetDetails(details:any){
    this.selectedAssetDetails =details;
  }

  sortMode: string = "Newest";

  changeSort(event: Event) {
  const select = event.target as HTMLSelectElement;

  if (!select) return;

  const mode = select.value;

  this.sortMode = mode;

  if (mode === "Oldest") {
    this.assets = [...this.assets].reverse();
  } else {
    this.assets = [...this.assets].reverse();
  }
}

newComment: string = ""; 

addComment() {
  if (!this.newComment.trim() || !this.selectedAsset) return;

  this.selectedAsset.comments.push({
    text: this.newComment,
    time: new Date().toLocaleString()
  });

  this.newComment = "";
}



}
