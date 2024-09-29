import { Routes } from '@angular/router';
import { LoginSingupComponent } from './Pages/login-signup/login-signup.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';

export const routes: Routes = [

    {
    path:'',
    redirectTo: 'loginsignup',
    pathMatch: 'full'
    },
    {
        path: 'loginsignup',
        component: LoginSingupComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children:
        [
            {
                path: 'dashboard',
                component: DashboardComponent
            }
        ]
    }
];