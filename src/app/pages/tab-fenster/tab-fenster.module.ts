import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabFensterPageRoutingModule } from './tab-fenster-routing.module';

import { TabFensterPage } from './tab-fenster.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabFensterPageRoutingModule
  ],
  declarations: [TabFensterPage]
})
export class TabFensterPageModule {}
