import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetmasterComponent } from './assetmaster/assetmaster.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AddAssetmasterComponent } from './add-assetmaster/add-assetmaster.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

const assetmasterRoutes: Routes=[
  {path:"list", component:AssetmasterComponent},
  {path:"add/:amId",component:AddAssetmasterComponent},
  
]

@NgModule({
  declarations: [AssetmasterComponent, AddAssetmasterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(assetmasterRoutes),
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
})
export class AssetmastersModule { }
