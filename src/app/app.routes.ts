import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { ResgisterComponent } from './pages/resgister/resgister.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashobard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: ResgisterComponent }

        ]
    }
];