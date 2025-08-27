import { Component, OnDestroy, OnInit } from '@angular/core';

enum ServerStatus {
  Online = 'online',
  Offline = 'offline',
  Unknown = 'unknown',
}

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnDestroy, OnInit {
  currentStatus: ServerStatus = ServerStatus.Online;

  ServerStatus = ServerStatus;
  private intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      const statusValues = Object.values(this.ServerStatus);
      const randomStatus = Math.floor(Math.random() * statusValues.length);

      this.currentStatus = statusValues[randomStatus];
    }, 2000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
