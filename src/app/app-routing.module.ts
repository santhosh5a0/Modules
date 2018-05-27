import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const AllRoutes:Routes=[
    {path:'' , redirectTo:'Home',pathMatch:'full'},
    {path:'Shared1', loadChildren: './shared/shared1.module#Shared1Module'},
    {path:'Home' , component:HomeComponent,},
    {path:'Details', component: DetailsComponent},
    {path:'About', component: AboutComponent},
   // {path:'**', component:PageNotFoundComponent}
];

@NgModule({
imports:[RouterModule.forRoot(AllRoutes)],
exports:[RouterModule]

})

export class AppRoutingModule{

    
}