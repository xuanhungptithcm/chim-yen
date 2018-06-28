import { DashboardComponent } from './content/dashboard/dashboard.component';
import { DocCamBienComponent } from './content/doc-cam-bien/doc-cam-bien.component';

import { LapLenhComponent } from './content/lap-lenh/lap-lenh.component';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DieuKhienComponent } from './content/dieu-khien/dieu-khien.component';
const APP_ROUTER =
    [
        {
            path: 'home', component: LayoutComponent, children: [
                { path: '', component: DashboardComponent },
                { path: 'dieukhien', component: DieuKhienComponent },
                { path: 'doccambien', component: DocCamBienComponent },
                { path: 'laplenh', component: LapLenhComponent }
            ]
        }
    ];

export const ROUTING = RouterModule.forRoot(APP_ROUTER);
