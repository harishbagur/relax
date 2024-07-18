import { Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CaretakerComponent } from './caretaker/caretaker.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const appRoutes: Route[] = [
    {
        path:'',
      redirectTo:'login',
      pathMatch: 'full',
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'careTaker',
        component: CaretakerComponent,
    },
    {
        path:'lovedOne',
        component:DashboardComponent
    }

];
