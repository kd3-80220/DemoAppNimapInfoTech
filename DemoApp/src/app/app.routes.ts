import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegistrationComponent } from './Mycomponents/registration/registration.component';
import { FormsModule } from '@angular/forms';
export const routes: Routes = [
    {path:'register',component:RegistrationComponent}
];


@NgModule({
    imports:[RouterModule.forRoot(routes),FormsModule],
    exports:[RouterModule]
})
export class AppRoutes{}