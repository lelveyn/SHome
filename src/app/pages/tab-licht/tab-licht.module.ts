import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabLichtPageRoutingModule } from './tab-licht-routing.module';

import { TabLichtPage } from './tab-licht.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabLichtPageRoutingModule
  ],
  declarations: [TabLichtPage]
})
export class TabLichtPageModule {}
