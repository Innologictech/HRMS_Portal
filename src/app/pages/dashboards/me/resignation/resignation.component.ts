import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { BsDatepickerConfig, BsDatepickerModule } from 'ngx-bootstrap/datepicker';

export interface ResignationItem {
  reason: string;
  requestDate: string;
  noticePeriod: string;
  attachment?: string;
  status: string;
  requestedOn: string;
}

@Component({
  selector: 'app-resignation',
  standalone: true,
  imports: [CommonModule,FormsModule,CKEditorModule,BsDatepickerModule],
  templateUrl: './resignation.component.html',
  styleUrls: ['./resignation.component.scss']
})
export class ResignationComponent {

  /* =========================
     VIEW TOGGLE
  ========================= */
  showHistory = true;
  showApplyForm = false;
bsConfig: any;

  openAddDrawer() {
    this.showHistory = false;
    this.showApplyForm = true;
  }

  backToHistory() {
    this.showApplyForm = false;
    this.showHistory = true;
  }

  /* =========================
     HISTORY TABLE DATA
  ========================= */
  Math = Math;

  selectedStatus: string = 'all';

  page = 1;
  pageSize = 25;
  pageSizes = [10, 25, 50, 100];

  resignationList: ResignationItem[] = [
    {
      reason: 'Better Opportunity',
      requestDate: '2025-12-10',
      noticePeriod: '30 Days',
      status: 'Pending',
      requestedOn: '2025-12-09'
    }
  ];

  filteredList: ResignationItem[] = [...this.resignationList];

  filterStatus() {
    if (this.selectedStatus === 'all') {
      this.filteredList = [...this.resignationList];
    } else {
      this.filteredList = this.resignationList.filter(
        item => item.status.toLowerCase() === this.selectedStatus.toLowerCase()
      );
    }
    this.page = 1;
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
    }
  }

  nextPage() {
    if (this.page * this.pageSize < this.filteredList.length) {
      this.page++;
    }
  }

  /* =========================
     APPLY FORM FIELDS
  ========================= */
  exitReason: string = '';
  requestedDate: string = '';
  description: string = '';
  comments: string = '';

// CKEditor
public Editor: any = ClassicEditor;

editorConfig = {
  toolbar: [
    'undo', 'redo', '|',
    'fontSize', 'fontFamily', '|',
    'bold', 'italic', 'underline', 'strikethrough', '|',
    'alignment', '|',
    'bulletedList', 'numberedList', '|',
    'insertTable', 'imageUpload', '|',
    'removeFormat'
  ]
};


  /* =========================
     SUBMIT
  ========================= */
  submit() {
    const payload = {
      exitReason: this.exitReason,
      requestedDate: this.requestedDate,
      description: this.description,
      comments: this.comments
    };

    console.log('Resignation Submitted:', payload);

    // after submit go back to history
    this.backToHistory();
  }
  
   constructor() {
    this.bsConfig = {
      dateInputFormat: 'DD-MMM-YYYY',
      showWeekNumbers: false,
      isAnimated: true
    };
  }
  
}
