import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Folder } from '../../models/folder';
import { FoldersService } from './folders.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css'],
})
export class FoldersComponent implements OnInit {
  folders: Folder[] = [];
  test: any = [1, 2, 3, 4];
  error: any;
  panelOpenState?: boolean;

  constructor(
    private authService: AuthenticationService,
    private foldersService: FoldersService,
    private router: Router
  ) {}
  showFolders() {
    if (this.authService.hasValidAccessToken()) {
      this.foldersService.getFolders().subscribe((data: Folder[]) => {
        this.folders = data;
        console.log(this.folders);
      });
      return;
    }
    alert('Please Login to IAM first');
  }

  viewDashboards(folder: Folder) {
    console.log(folder);
    this.router.navigate(['/dashboards', folder.id]);
  }

  // showDashboards(folder: Folder) {
  //   if (folder.dashboards) {
  //     return;
  //   }
  //   this.foldersService
  //     .getDashboards(folder.id)
  //     .subscribe((data: Dashboard[]) => {
  //       console.log('dashboard is: ', data);
  //       folder.dashboards = data;
  //     });
  // }

  ngOnInit(): void {
    this.showFolders();
  }
}
