import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule,FormsModule,BsDatepickerModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent {
activeTab:string='directory';


addAsset: any = {
  assetId: '',
  serialNumber: '',
  brand: '',
  vendor: '',
  model: '',
  category: '',
  location: '',
  acquiredOn: '',
  warrantyStart: '',
  warrantyEnd: '',
  description: ''
};

onAddImageSelect(event: any) {
  const file = event.target.files[0];
  console.log("Add Asset Image:", file);
}

saveNewAsset() {
  console.log("Saving NEW asset...", this.addAsset);
  // Call API here later
}



filter: any = {
  assetId: '',
  serialNumber: '',
  location: '',
  status: '',
  model: '',
  category: '',
  subordinateOf: '',
  employee: ''
};

applyFilters() {
  console.log("Applied Filters:", this.filter);

}


editAsset: any = {
  status: '',
  employee: '',
  fromDate: '',
  assetId: '',
  serialNumber: '',
  brand: '',
  vendor: '',
  model: '',
  category: '',
  location: '',
  acquiredOn: '',
  warrantyStart: '',
  warrantyEnd: '',
  description: ''
};

onImageSelect(event: any) { console.log(event.target.files[0]); }

onAttachmentSelect(event: any) { console.log(event.target.files[0]); }

saveAsset() {
  console.log("Saving asset...", this.editAsset);
}

// bsConfig = {
//   dateInputFormat: 'DD-MM-YYYY',
//   containerClass: 'theme-dark-blue',
//   showWeekNumbers: false
// };

form = new FormGroup({
  ucocollection: new FormControl(null)
});


}
