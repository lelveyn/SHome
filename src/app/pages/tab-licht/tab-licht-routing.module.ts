import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabLichtPage } from './tab-licht.page';

const routes: Routes = [
  {
    path: '',
    component: TabLichtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabLichtPageRoutingModule {}
