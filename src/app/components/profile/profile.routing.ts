import { ProfileComponent } from './profile.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'',component:ProfileComponent },
];

export const ProfileRoutes = RouterModule.forChild(routes);
