import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Purchase } from 'src/app/purchase/purchase';
import { PurchaseService } from 'src/app/purchase/purchase.service';
@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.scss']
})
export class PurchaseListComponent implements OnInit {

  term:string;
  page :number=1;
  constructor(public purchaseService: PurchaseService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    public router: Router) { }

  ngOnInit(): void {
    this.getAllPurchaseForComponent();
  }

  getAllPurchaseForComponent(){
    console.log("Get all Professors");
    this.purchaseService.getAllPurchaseOrders();
  }

  //2.update the professor
  updatePurchase(pdId:number,purc:Purchase){

    console.log("Update Purchase with Purchase Id "+pdId);
    this.router.navigate(['purchaseadd',pdId]);
    this.purchaseService.formPurchaseData=Object.assign({},purc);
  }

  //3.Delete the Professor
  deletePurchase(purchase:Purchase){

    console.log("delete professor with professorId "+purchase.pdId);

    if(confirm('Are you sure to DELETE this purchase order?')){
      this.purchaseService.deletePurchase(purchase);
      //call service for deletion
     console.log("Call Service fro deletion.");
    
    }

  }

  //4.populateForm when click td
  populateForm(purchase:Purchase){
    console.log(purchase);
    this.purchaseService.formPurchaseData=Object.assign({},purchase);
    window.location.reload();
  }

}
