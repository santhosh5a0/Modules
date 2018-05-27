import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { SharedComponent } from './shared.component';

const SharedRoutes: Routes=[
    { path:'', component:SharedComponent},
];

@NgModule({
imports:[RouterModule.forChild(SharedRoutes)],
exports:[RouterModule]
})

export class SharedRoutingModule{

}