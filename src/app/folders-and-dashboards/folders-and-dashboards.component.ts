import { Component, OnInit } from '@angular/core';
import { Folder } from '../models/folder';
import { DashboardService } from './dashboard.service';
import { MatAccordion } from '@angular/material/expansion';
import { Dashboard } from '../models/dashboard';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-folders-and-dashboards',
  templateUrl: './folders-and-dashboards.component.html',
  styleUrls: ['./folders-and-dashboards.component.css'],
  providers: [DashboardService],
})
export class FoldersAndDashboardsComponent {
  folders: Folder[] = [];
  test: any = [1, 2, 3, 4];
  error: any;
  panelOpenState?: boolean;

  constructor(
    private dashboardService: DashboardService,
    private authenticationService: AuthenticationService
  ) {}
  showFolders() {
    if (this.authenticationService.hasValidAccessToken()) {
      this.dashboardService.getFolders().subscribe((data: Folder[]) => {
        this.folders = data;
        console.log(this.folders);
      });
      return;
    }
    alert('Please Login to IAM first');
  }

  showDashboards(folder: Folder) {
    if (folder.dashboards) {
      return;
    }
    this.dashboardService
      .getDashboards(folder.id)
      .subscribe((data: Dashboard[]) => {
        console.log('dashboard is: ', data);
        folder.dashboards = data;
      });
  }
}
