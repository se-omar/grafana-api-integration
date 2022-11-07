import { Injectable } from '@angular/core';
import { Dashboard } from '../models/dashboard';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Folder } from '../models/folder';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  //   dashboard?: Dashboard;
  foldersUrl = 'http://localhost/api/folders';
  dashboardsUrl = 'http://localhost/api/search';
  apiKey =
    'eyJrIjoiMW1IbjQ0ejJrN2phZHc0OFJtQlpGU0w0aTNPVDVNTzQiLCJuIjoidGVzdC1rZXkyIiwiaWQiOjF9';
  constructor(private http: HttpClient) {}

  getFolders() {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.apiKey}`
    );
    return this.http.get<Folder[]>(this.foldersUrl, {
      responseType: 'json',
      headers: headers,
    });
  }

  getDashboards(folderId: number) {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.apiKey}`
    );
    return this.http.get<Dashboard[]>(
      `${this.dashboardsUrl}?folderIds=${folderId}`,
      { responseType: 'json', headers: headers }
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
