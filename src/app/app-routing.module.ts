import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeelsShopAboutComponent } from './heels-shop-about/heels-shop-about.component';
import { HeelsShopHeelsComponent } from './heels-shop-heels/heels-shop-heels.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'heels',
    pathMatch: 'full'
  },
  {
    path: 'heels',
    component: HeelsShopHeelsComponent
  },
  {
    path: 'about',
    component: HeelsShopAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
