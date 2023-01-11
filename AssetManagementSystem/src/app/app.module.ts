import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import{ HttpClientModule} from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import {PurchaseService} from './purchase/purchase.service';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import {PurchaseModule } from './purchase/purchase.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import {NgxPaginationModule} from 'ngx-pagination';
import {VendorService} from '../app/vendors/vendor.service';
import {AssetdefinationService} from '../app/assetdefination/assetdefination.service';
import {AssetdefinationModule } from '../app/assetdefination/assetdefination.module';
import {VendorsModule} from '../app/vendors/vendors.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PurchaseModule ,
    VendorsModule,
    AssetdefinationModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [PurchaseService,VendorService,AssetdefinationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
