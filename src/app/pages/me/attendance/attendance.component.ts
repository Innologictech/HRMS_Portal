import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface AttendanceRequest {
  date: string;
  note: string;
  status: string;
  actionBy: string;
  next: string;
}

interface CalendarDay {
  date: number | null;
  isToday: boolean;
  isCurrentMonth: boolean;
}

@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule ],
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent {

  // top cards – static demo data
  meStats = {
    avg: '4h 24m',
    avgLabel: 'Avg Hrs / Day',
    arrival: '40%',
    arrivalLabel: 'On Time Arrival'
  };

  teamStats = {
    avg: '4h 33m',
    avgLabel: 'Avg Hrs / Day',
    arrival: '29%',
    arrivalLabel: 'On Time Arrival'
  };

  // timings/clock – demo values
  todayTiming = 'Today (9:30 AM – 6:30 PM)';
  duration = 'Duration: 9h 0m';
  clockTime = '04:36:21 PM';
  lastLogin = '6h:34m since last login';

  // week selector
  weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  activeWeekIndex = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1; // 0=Sun

  // logs / requests table
  requests: AttendanceRequest[] = [
    {
      date: '03 Dec 2025',
      note: 'Clock in issue',
      status: 'Approved',
      actionBy: 'Durga Prasad',
      next: ''
    },
    {
      date: '04 Dec 2025',
      note: 'Clock in issue',
      status: 'Approved',
      actionBy: 'Durga Prasad',
      next: ''
    },
    {
      date: '05 Dec 2025',
      note: 'Remote clock in',
      status: 'Pending',
      actionBy: '—',
      next: 'Manager'
    }
  ];

  // pagination
  pageSize = 5;
  currentPage = 1;

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.requests.length / this.pageSize));
  }

  get pagedRequests(): AttendanceRequest[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.requests.slice(start, start + this.pageSize);
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
  }

  // logs tabs
  activeLogTab: 'log' | 'calendar' | 'requests' = 'requests';

  setActiveTab(tab: 'log' | 'calendar' | 'requests') {
    this.activeLogTab = tab;
  }

  // =====================
// Calendar Configuration
// =====================

calendarDaysHeader = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

selectedYear = new Date().getFullYear();
selectedMonth = new Date().getMonth();

calendarMonthName = '';
calendarYear = 0;
calendarWeeks: any[][] = [];

ngOnInit() {
  this.buildCalendar(this.selectedYear, this.selectedMonth);
}

prevMonth() {
  if (this.selectedMonth === 0) {
    this.selectedMonth = 11;
    this.selectedYear--;
  } else {
    this.selectedMonth--;
  }
  this.buildCalendar(this.selectedYear, this.selectedMonth);
}

nextMonth() {
  if (this.selectedMonth === 11) {
    this.selectedMonth = 0;
    this.selectedYear++;
  } else {
    this.selectedMonth++;
  }
  this.buildCalendar(this.selectedYear, this.selectedMonth);
}

private buildCalendar(year: number, month: number) {
  this.calendarYear = year;
  this.calendarMonthName = new Date(year, month)
    .toLocaleString('default', { month: 'long' });

  const firstDay = new Date(year, month, 1).getDay();
  const start = firstDay === 0 ? 6 : firstDay - 1; // Monday start

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();

  const cells: any[] = [];

  // Leading empty
  for (let i = 0; i < start; i++) {
    cells.push({ date: null });
  }

  // Month dates
  for (let d = 1; d <= daysInMonth; d++) {
    const index = (start + d - 1) % 7;
    const isOff = index === 5 || index === 6;
    const isToday =
      d === today.getDate() &&
      year === today.getFullYear() &&
      month === today.getMonth();

    cells.push({
      date: d,
      isToday,
      isOff,
      timing: isOff ? null : '9:30 AM - 6:30 PM'
    });
  }

  // trailing empty
  while (cells.length % 7 !== 0) {
    cells.push({ date: null });
  }

  // Split rows
  const weeks = [];
  for (let i = 0; i < cells.length; i += 7) {
    weeks.push(cells.slice(i, i + 7));
  }

  this.calendarWeeks = weeks;
}



}
