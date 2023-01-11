import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';
import { AddPurchaseComponent } from './add-purchase/add-purchase.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {PurchaseComponent} from './purchase.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from '../app-routing.module';

const PurchaseRoutes: Routes = [



  {
    path: '',

    component:PurchaseComponent,

    children: [

      {

        path: 'add',

        component: AddPurchaseComponent,

      },

      {

        path: 'list',

        component: PurchaseListComponent,

      },

    ],

  },

];

@NgModule({
  declarations: [PurchaseListComponent, AddPurchaseComponent,PurchaseComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(PurchaseRoutes),
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    Ng2SearchPipeModule,
    NgxPaginationModule
    
  ]
})
export class PurchaseModule { }
