import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginsModule} from './logins/logins.module';
import { AdminComponent } from './admin/admin.component';
import { PurchasemanagerComponent } from './purchasemanager/purchasemanager.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AssetmastersModule } from './assetmasters/assetmasters.module';
import { AssetmasterService } from './assetmasters/assetmaster.service'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    PurchasemanagerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoginsModule,
    AssetmastersModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [AssetmasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
