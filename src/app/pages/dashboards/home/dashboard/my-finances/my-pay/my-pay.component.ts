import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-my-pay',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './my-pay.component.html',
  styleUrl: './my-pay.component.scss'
})
export class MyPayComponent {
  activeTab: string = 'salary';
  activeSubTab: string = 'waiting';
}
