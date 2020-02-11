import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { UserInformationComponent } from './component/user-information/user-information.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'userInformation',
    component: UserInformationComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
