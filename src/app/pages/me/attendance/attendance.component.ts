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

  // simple calendar data for "Calendar" tab
  calendarMonthName = '';
  calendarYear = 0;
  calendarWeeks: CalendarDay[][] = [];

  constructor() {
    const today = new Date();
    this.buildCalendar(today.getFullYear(), today.getMonth());
  }

  private buildCalendar(year: number, month: number) {
    this.calendarYear = year;
    this.calendarMonthName = new Date(year, month, 1).toLocaleString('default', {
      month: 'long'
    });

    const firstDayOfMonth = new Date(year, month, 1);
    const startDay = firstDayOfMonth.getDay(); // 0-6
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();

    const cells: CalendarDay[] = [];
    // leading blanks
    for (let i = 0; i < startDay; i++) {
      cells.push({ date: null, isToday: false, isCurrentMonth: false });
    }
    // month days
    for (let d = 1; d <= daysInMonth; d++) {
      const isToday =
        d === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear();
      cells.push({ date: d, isToday, isCurrentMonth: true });
    }
    // trailing blanks to complete weeks
    while (cells.length % 7 !== 0) {
      cells.push({ date: null, isToday: false, isCurrentMonth: false });
    }

    // split into weeks (rows)
    this.calendarWeeks = [];
    for (let i = 0; i < cells.length; i += 7) {
      this.calendarWeeks.push(cells.slice(i, i + 7));
    }
  }

showRequest = false;

leave = {
  from: '',
  to: '',
  days: 0,
  type: '',
  note: '',
  notify: ''
};

openRequest() {
  this.showRequest = true;
}

closeRequest() {
  this.showRequest = false;
}

submitRequest() {
  // TODO: API
  console.log("Request Leave:", this.leave);
   alert("Clicked");
  this.closeRequest();
}



}
