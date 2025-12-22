import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface LetterItem {
  letterName: string;
  actionedOn: string;
  status: string;
  approver: string;
}

@Component({
  selector: 'app-my-letters',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './my-letters.component.html',
  styleUrl: './my-letters.component.scss'
})
export class MyLettersComponent {

  /* ===== VIEW TOGGLE (SAME AS RESIGNATION) ===== */
  showHistory = true;
  showApplyForm = false;

  backToHistory() {
    this.showApplyForm = false;
    this.showHistory = true;
  }

  openApplyForm() {
    console.log('PLUS CLICKED'); // DEBUG
    this.showHistory = false;
    this.showApplyForm = true;
  }

  Math = Math;

  /* ===== FILTERS ===== */
  selectedStatus = 'all';
  selectedLetter = 'all';
  searchText = '';

  page = 1;
  pageSize = 25;
  pageSizes = [10, 25, 50, 100];

  letterList: LetterItem[] = [];
  filteredList: LetterItem[] = [];

  constructor() {
    this.filteredList = [...this.letterList];
  }

  applyFilter() {
    this.filteredList = this.letterList.filter(item =>
      (this.selectedStatus === 'all' || item.status.toLowerCase() === this.selectedStatus) &&
      (this.selectedLetter === 'all' || item.letterName.toLowerCase().includes(this.selectedLetter)) &&
      (this.searchText === '' || item.letterName.toLowerCase().includes(this.searchText.toLowerCase()))
    );
    this.page = 1;
  }

  resetFilters() {
    this.selectedStatus = 'all';
    this.selectedLetter = 'all';
    this.searchText = '';
    this.filteredList = [...this.letterList];
    this.page = 1;
  }

  prevPage() {
    if (this.page > 1) this.page--;
  }

  nextPage() {
    if (this.page * this.pageSize < this.filteredList.length) this.page++;
  }

  /* ===== LETTER DROPDOWN ===== */
  showLetterDropdown = false;
  letterSearch = '';

  letters = [
    'Resignation Acceptance',
    'Offer of Promotion',
    'Certificate of Employment',
    'Experience Letter',
    'Salary Certificate',
    'Visa NOC',
    'Employment NOC',
    'Project NOC',
    'FnF Settlement Letter',
    'Probation Completion Letter',
    'Direct Deposit Authorization Form'
  ];

  filteredLetters = [...this.letters];

  toggleLetterDropdown() {
    this.showLetterDropdown = !this.showLetterDropdown;
    this.filteredLetters = [...this.letters];
  }

  filterLetters() {
    this.filteredLetters = this.letters.filter(l =>
      l.toLowerCase().includes(this.letterSearch.toLowerCase())
    );
  }

  selectLetter(letter: string) {
    this.selectedLetter = letter;
    this.letterSearch = letter;
    this.showLetterDropdown = false;
  }
}
