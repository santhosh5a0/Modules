import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { SharedRoutingModule } from './shared-routing-module';
import { CommonModule } from '@angular/common';
@NgModule({
declarations:[SharedComponent],
imports:[SharedRoutingModule,CommonModule],

})

export class Shared1Module{


}