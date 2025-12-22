import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


interface AssetItem {
  category: string;
  assetName: string;
  assetItem: string;
  givenDate: string;
  status: string;
}


@Component({
  selector: 'app-asset',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent {

  assetList: AssetItem[] = [];
 showRequestForm: boolean = false;
comments: any;

  constructor() {
    // Example data (remove when using API)
    this.assetList = [
      {
        category: "Software",
        assetName: "Angular",
        assetItem: "Oracle",
        givenDate: "2024-08-14T04:40:00",
        status: "Approved"
      }
    ];
  }


  
  requestAssets() {
    console.log('Request Assets clicked');
    this.showRequestForm = true;
  }

  closeForm() {
    this.showRequestForm = false;
  }
}
