import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from 'src/app/components/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/components/sign-up/sign-up.component';
import { AuthGuard } from '../guard/auth.guard';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { ManageDepartmentComponent } from 'src/app/components/manage-department/manage-department.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { MyProfileComponent } from 'src/app/components/my-profile/my-profile.component';
import { ConpanyComponent } from 'src/app/components/conpany/conpany.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: SignInComponent },
  { path: 'register', component: SignUpComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  { path: 'manage-departments', component: ManageDepartmentComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: MyProfileComponent },
  { path: 'company', component: ConpanyComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
