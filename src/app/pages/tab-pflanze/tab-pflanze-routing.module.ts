import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPflanzePage } from './tab-pflanze.page';

const routes: Routes = [
  {
    path: '',
    component: TabPflanzePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPflanzePageRoutingModule {}
