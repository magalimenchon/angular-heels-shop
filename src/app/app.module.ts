import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeelListComponent } from './heel-list/heel-list.component';
import { CartComponent } from './cart/cart.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { HeelsShopAboutComponent } from './heels-shop-about/heels-shop-about.component';
import { HeelsShopHeelsComponent } from './heels-shop-heels/heels-shop-heels.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeelListComponent,
    CartComponent,
    HeelsShopAboutComponent,
    HeelsShopHeelsComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
