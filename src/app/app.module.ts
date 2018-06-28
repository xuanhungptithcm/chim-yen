import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarLayoutComponent } from './navbar-layout/navbar-layout.component';
import { MenuComponent } from './menu/menu.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './content/dashboard/dashboard.component';
import { DocCamBienComponent } from './content/doc-cam-bien/doc-cam-bien.component';
import { LuuTruComponent } from './content/luu-tru/luu-tru.component';
import { LapLenhComponent } from './content/lap-lenh/lap-lenh.component';
import { ROUTING } from 'src/app/routing.config';
import { DieuKhienComponent } from './content/dieu-khien/dieu-khien.component';
import { UiSwitchModule } from 'ngx-ui-switch';
import { ChartsModule } from 'ng2-charts';

// Import Doc Cam Bien
import { MatCardModule, MatToolbarModule, MatToolbar, MatButtonModule, MatButton, MatMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { } from '../../node_modules/angular4-fusioncharts/dist/src/fusioncharts/fusioncharts.module';
import { FusionChartsModule } from 'angular4-fusioncharts';
FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);

@NgModule({
  declarations: [
    AppComponent,
    NavbarLayoutComponent,
    MenuComponent,
    LayoutComponent,
    DashboardComponent,
    DocCamBienComponent,
    LuuTruComponent,
    LapLenhComponent,
    DieuKhienComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ChartsModule,
    BrowserModule,
    ROUTING,
    UiSwitchModule,
    FusionChartsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    FusionChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
