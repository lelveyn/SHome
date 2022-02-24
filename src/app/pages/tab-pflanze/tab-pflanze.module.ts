import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabPflanzePageRoutingModule } from './tab-pflanze-routing.module';

import { TabPflanzePage } from './tab-pflanze.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabPflanzePageRoutingModule
  ],
  declarations: [TabPflanzePage]
})
export class TabPflanzePageModule {}
