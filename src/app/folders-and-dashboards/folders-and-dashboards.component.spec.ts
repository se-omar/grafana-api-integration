import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldersAndDashboardsComponent } from './folders-and-dashboards.component';

describe('FoldersAndDashboardsComponent', () => {
  let component: FoldersAndDashboardsComponent;
  let fixture: ComponentFixture<FoldersAndDashboardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoldersAndDashboardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoldersAndDashboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
