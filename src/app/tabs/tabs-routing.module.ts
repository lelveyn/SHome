import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'zimmer/:name',
        loadChildren: () => import('../pages/zimmer/zimmer.module').then(m => m.ZimmerPageModule)
      },
      {
        path: 'tab-temp',
        loadChildren: () => import('../pages/tab-temp/tab-temp.module').then(m => m.TabTempPageModule)
      },
      {
        path: 'tab-pflanze',
        loadChildren: () => import('../pages/tab-pflanze/tab-pflanze.module').then(m => m.TabPflanzePageModule)
      },
      {
        path: 'tab-licht',
        loadChildren: () => import('../pages/tab-licht/tab-licht.module').then(m => m.TabLichtPageModule)
      },
      {
        path: 'tab-fenster',
        loadChildren: () => import('../pages/tab-fenster/tab-fenster.module').then(m => m.TabFensterPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
