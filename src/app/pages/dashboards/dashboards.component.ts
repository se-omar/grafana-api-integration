import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Dashboard } from 'src/app/models/dashboard'
import { environment } from 'src/environments/environment'
import { DashboardsService } from './dashboards.service'

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css'],
})
export class DashboardsComponent implements OnInit {
  folderId?: number
  dashboards?: Dashboard[]
  constructor(
    private route: ActivatedRoute,
    private dashboardsService: DashboardsService,
    private router: Router
  ) {
    this.route.params.subscribe(
      (params) => (this.folderId = params['folderId'])
    )
  }

  showDashboards() {
    this.dashboardsService
      .getDashboards(this.folderId)
      .subscribe((data: Dashboard[]) => {
        console.log('dashboard is: ', data)
        this.dashboards = data
      })
  }

  goToDashboard(dashboard: Dashboard) {
    console.log('dashboarddddd', dashboard)
    // window.location.href = environment.grafanaUrl + dashboard.url
    this.router.navigate(['/grafana-iframe',  dashboard.uid,  dashboard.url.split('/')[3]])
  }

  ngOnInit(): void {
    this.showDashboards()
  }
}
