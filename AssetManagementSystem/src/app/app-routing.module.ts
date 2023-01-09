import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './logins/login/login.component';
import { PurchasemanagerComponent } from './purchasemanager/purchasemanager.component';

const routes: Routes = [
  {path:'',redirectTo:'/logins',pathMatch:'full'},
  {path:'admin', component:AdminComponent},
  {path:'purchasemng', component:PurchasemanagerComponent},
  {path:'logins' ,loadChildren: '../app/logins/logins.module#LoginsModule'},
  {path:'assetmasters',loadChildren:'../app/assetmasters/assetmasters.module#AssetmastersModule'},
 // {path:'assetmasterslist',loadChildren:'../app/assetmasters/assetmasters.module#AddAssetmasterComponent'},
  //{path:'assetmasters',loadChildren:'../app/assetmasters/assetmasters.module#AssetmastersModule'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
