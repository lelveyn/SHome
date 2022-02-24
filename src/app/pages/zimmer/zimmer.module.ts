import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZimmerPageRoutingModule } from './zimmer-routing.module';

import { ZimmerPage } from './zimmer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZimmerPageRoutingModule
  ],
  declarations: [ZimmerPage]
})
export class ZimmerPageModule {}
