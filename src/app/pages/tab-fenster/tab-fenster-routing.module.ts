import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabFensterPage } from './tab-fenster.page';

const routes: Routes = [
  {
    path: '',
    component: TabFensterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabFensterPageRoutingModule {}
