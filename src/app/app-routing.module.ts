import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrowdpostingComponent } from './components/crowdposting/crowdposting.component';
import { UgcComponent } from './components/ugc/ugc.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'crowdposting', component:CrowdpostingComponent},
  {path: 'ugc', component: UgcComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
