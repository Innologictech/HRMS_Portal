import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface NoticePeriod {
  name: string;
  duration: string;
  isDefault: boolean;
  addedBy: string;
}

@Component({
  selector: 'app-exit',
  standalone: true,
  imports: [  CommonModule,
    FormsModule  ],
  templateUrl: './exit.component.html',
  styleUrl: './exit.component.scss'
})
export class ExitComponent {
goToAdd() {
throw new Error('Method not implemented.');
}

  // Main List
  noticePeriods: NoticePeriod[] = [
    {
      name: 'Default Notice Period',
      duration: '30 Days',
      isDefault: true,
      addedBy: 'Paramesh Ganavena'
    }
  ];

  // For search filter
  searchText: string = '';

  // Computed filtered list
  get filteredList(): NoticePeriod[] {
    if (!this.searchText.trim()) return this.noticePeriods;

    const text = this.searchText.toLowerCase();
    return this.noticePeriods.filter(item =>
      item.name.toLowerCase().includes(text) ||
      item.duration.toLowerCase().includes(text) ||
      item.addedBy.toLowerCase().includes(text)
    );
  }

  // ==================== ACTIONS ====================

  onSearch(event: any) {
    this.searchText = event.target.value;
  }

  onAdd() {
    console.log("Add new notice period clicked");
  }

  onExport() {
    console.log("Download/export clicked");
  }

  onEdit(item: NoticePeriod) {
    console.log("Edit clicked:", item);
  }

  onMenu(item: NoticePeriod) {
    console.log("Menu clicked:", item);
  }

 showAddForm = false;
showDropdown = false;

model = {
  name: '',
  description: '',
  duration: '',
  durationType: '',
  isDefault: false
};

durationTypes = ['Days', 'Weeks', 'Months'];
filteredTypes = [...this.durationTypes];

openAddForm() {
  this.showAddForm = true;
}

goBack() {
  this.showAddForm = false;
  this.showDropdown = false;
}

filterType(event: any) {
  const value = event.target.value.toLowerCase();
  this.filteredTypes = this.durationTypes.filter(t => t.toLowerCase().includes(value));
  this.showDropdown = true;
}

selectType(type: string) {
  this.model.durationType = type;
  this.showDropdown = false;
}

submitForm() {
  // Basic Validation
  if (!this.model.name || !this.model.description || !this.model.duration || !this.model.durationType) {
    alert("Please fill all required fields.");
    return;
  }

  // Here you can send API call
  console.log("Form Submitted:", this.model);

  // After submit go back to list screen
  this.goBack();
}


}


