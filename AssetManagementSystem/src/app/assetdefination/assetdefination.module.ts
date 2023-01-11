import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetdefinationAddComponent } from './assetdefination-add/assetdefination-add.component';
import { AssetdefinationListComponent } from './assetdefination-list/assetdefination-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from '../app-routing.module';
import { AssetdefinationComponent } from './assetdefination.component';


const AssetDefinationRoutes: Routes = [

  {

    path: '',
    component:AssetdefinationComponent,
    children: [
      {
        path: 'addassetdefination/:adId',
        component: AssetdefinationAddComponent,
      },
      {
        path: 'addassetdefination',
        component: AssetdefinationAddComponent,
      },
      {
        path: 'assetdefinationlist',
        component: AssetdefinationListComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [AssetdefinationAddComponent, AssetdefinationListComponent, AssetdefinationComponent],
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
    RouterModule.forChild(AssetDefinationRoutes)
  ]
})
export class AssetdefinationModule { }
