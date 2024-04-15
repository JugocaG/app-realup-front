import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrowdpostingComponent } from './components/crowdposting/crowdposting.component';
import { UgcComponent } from './components/ugc/ugc.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { BrandAmbassadorComponent } from './components/brand-ambassador/brand-ambassador.component';
import { HomeComponent } from './components/home/home.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'crowdposting', component:CrowdpostingComponent},
  {path: 'ugc', component: UgcComponent},
  {path: 'brand-ambassador', component: BrandAmbassadorComponent},
  {path: 'home', component: HomeComponent},
  {path: 'pruebas', component: PruebasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
