import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { VendorService } from './vendors/vendor.service';
import { VendorsModule } from './vendors/vendors.module';
import { AssetdefinationModule } from './assetdefination/assetdefination.module'
import { AssetdefinationService } from './assetdefination/assetdefination.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    Ng2SearchPipeModule,
    NgxPaginationModule,
    VendorsModule,
    AssetdefinationModule
  ],
  providers: [VendorService ,AssetdefinationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
