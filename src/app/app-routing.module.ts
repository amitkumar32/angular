import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import {HomeComponent} from './home/home.component';
import {CareersComponent} from './careers/careers.component';
import {FeaturesComponent} from './features/features.component';
import {ServicessComponent} from './servicess/servicess.component';
import{ContactComponent} from './contact/contact.component';

const routes: Routes = [
{ path: 'about', component:AboutComponent },
{path:'',  pathMatch:'full',component:HomeComponent},
{path:'careers',component:CareersComponent},
{path:'features',component:FeaturesComponent},
{path: 'servicess',component:ServicessComponent},
{path:'contact',component:ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
