import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DepartmentChartComponent } from './department-chart/department-chart.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng2GoogleChartsModule, GoogleChartsSettings } from 'ng2-google-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Firebase services + enviorment module
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AppRoutingModule } from 'src/app/shared/routing/app-routing.module';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthService } from './shared/services/auth.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ManageDepartmentComponent } from './components/manage-department/manage-department.component';
import { HomeComponent } from './components/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    DepartmentChartComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    DashboardComponent,
    ManageDepartmentComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2GoogleChartsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
