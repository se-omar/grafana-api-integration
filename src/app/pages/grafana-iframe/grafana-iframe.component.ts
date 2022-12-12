import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-grafana-iframe',
  templateUrl: './grafana-iframe.component.html',
  styleUrls: ['./grafana-iframe.component.css'],
})
export class GrafanaIframeComponent implements OnInit {
  constructor(private route: ActivatedRoute, public sanitizer: DomSanitizer) {}

  grafanaUrl?: SafeResourceUrl;

  ngOnInit(): void {
    let params = window.location.pathname.split('/');
    let url = environment.grafanaUrl + '/d/' + params[2] + '/' + params[3];
    this.grafanaUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
