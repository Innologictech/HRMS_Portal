import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inbox',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.scss'
})
export class InboxComponent {
activeTab: string | null = null;

setTab(tab: string) {
  if (this.activeTab === tab) {
    this.activeTab = null;
    this.selectedTask = null;
    this.selectedAsset = null;
    return;
  }
  this.activeTab = tab;
  if (tab !== 'take-action') {
    this.selectedTask = null;
    this.selectedAsset = null;
  }
}
  

  pendingTasks: any[]=[
    {id:1, Name: "Assets", count:1},
  ];
  assets: any[]=[{
    id: 101,
      user: "Sunil Kumar Akula",
      time: "10 months ago",
      title: "Dell",
      description: "Asset Acknowledgement request",
      details: {
        assetName: "Dell",
        assetId: "00331-10000-00001-AA830",
        location: "Hyderabad",
        assetType: "Laptop",
        category: "Computer Hardware",
        condition: "Fair",
        raisedOn: "23 Jan 2025 12:11 pm"
      }
    }
  ];
  selectedTask: any = null;
  selectedAsset: any = null;

  openTask(task:any){
    this.selectedTask = task;
    this.selectedAsset =null;
  }
  openAsset(asset:any){
    this.selectedAsset =asset;
    this.selectedTask = null;
  }
}
