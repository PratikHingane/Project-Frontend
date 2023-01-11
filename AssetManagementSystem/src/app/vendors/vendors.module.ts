import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorAddComponent } from './vendor-add/vendor-add.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { VendorsComponent } from './vendors.component';

const VenderRoutes: Routes = [

  {
    path: '',
    component:VendorsComponent,
    children: [
      {
        path: 'addvendor/:vdId',
        component: VendorAddComponent,
      },
      {
        path: 'addvendor',
        component: VendorAddComponent,
      },
      {
        path: 'vendorlist/:vdId',
        component: VendorListComponent,
      },
      {
        path: 'vendorlist',
        component: VendorListComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [VendorAddComponent, VendorListComponent, VendorsComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    RouterModule.forChild(VenderRoutes)
  ]
})
export class VendorsModule { }
