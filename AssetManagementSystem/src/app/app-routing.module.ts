import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPurchaseComponent } from './purchase/add-purchase/add-purchase.component';

const routes: Routes = [
  {path:'',redirectTo:'purchaselist',pathMatch:'full'},
  {path:'purchase',loadChildren:"../app/purchase/purchase.module#PurchaseModule"},
  {path: 'purchaseadd',component:AddPurchaseComponent},
  {path: 'purchaseadd/:pdId',component:AddPurchaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
