import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabTempPage } from './tab-temp.page';

const routes: Routes = [
  {
    path: '',
    component: TabTempPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabTempPageRoutingModule {}
