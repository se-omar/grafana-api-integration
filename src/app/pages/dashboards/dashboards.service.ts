import { Injectable } from '@angular/core';
import { Dashboard } from '../../models/dashboard';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class DashboardsService {
  //   dashboard?: Dashboard;
  foldersUrl = environment.foldersUrl;
  dashboardsUrl = environment.dashboardsUrl;
  apiKey = environment.apiKey;
  folderId?: number;
  constructor(private http: HttpClient) {}

  getDashboards(folderId?: number) {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.apiKey}`
    );
    return this.http.get<Dashboard[]>(
      `${this.dashboardsUrl}?folderIds=${folderId}`,
      { responseType: 'json', headers: headers }
    );
  }
}
