import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabTempPageRoutingModule } from './tab-temp-routing.module';

import { TabTempPage } from './tab-temp.page';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabTempPageRoutingModule,
    NgChartsModule
  ],
  declarations: [TabTempPage]
})
export class TabTempPageModule {}
