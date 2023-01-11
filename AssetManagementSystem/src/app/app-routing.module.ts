import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorListComponent } from './vendors/vendor-list/vendor-list.component';
import { VendorAddComponent } from './vendors/vendor-add/vendor-add.component';

const routes: Routes = [
  // { path: 'addvendor/:vdId',  component:VendorAddComponent},
  // { path: 'vendorlist',  component:VendorListComponent},
  { path: 'assetdefination',  loadChildren:"../app/assetdefination/assetdefination.module#AssetdefinationModule"},
  { path: '',redirectTo:'vendorlist',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
