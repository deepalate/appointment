import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { UpdateAppointmentComponent } from './update-appointment/update-appointment.component';

const routes: Routes = [
  { path: '', redirectTo: 'appointment', pathMatch: 'full' },
  { path: 'appointment', component: AppointmentListComponent },
  { path: 'new', component: CreateAppointmentComponent },
  { path: 'update/:bookingId', component: UpdateAppointmentComponent },
  { path: 'details/:bookingId', component: AppointmentDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
