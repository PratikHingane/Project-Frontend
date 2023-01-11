import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PurchaseService } from '../purchase.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-purchase',
  templateUrl: './add-purchase.component.html',
  styleUrls: ['./add-purchase.component.scss'],
})
export class AddPurchaseComponent implements OnInit {
  _pdId: number;
 _statusId:number;
  constructor(
    public purchaseService: PurchaseService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.purchaseService.getAssetTypes();
    this.purchaseService.getVendors();
    this.purchaseService.getStatus();
    this._pdId = this.route.snapshot.params['pdId'];
  }

  //submit method
  onSubmit(form: NgForm) {
    console.log(form.value);
    let _addpurchaseId = this.purchaseService.formPurchaseData.pdId;

    //check condition
    if (_addpurchaseId == 0 || _addpurchaseId == null) {
      //form.value.statusId=this._statusId;
      this.addPurchase(form);
      console.log(form.value.statusId);
      this.router.navigateByUrl('/list');
      //window.location.reload();
    } else {
      this.editPurchase(form);
      console.log(form.value);
      //window.location.reload();
    }
  }

  //INSERT
  addPurchase(form?: NgForm) {
    console.log('Inserting...');
    console.log(form.value);
    this.purchaseService.insertPurchase(form.value).subscribe(
      (result) => {
        console.log(result);
        this.toastr.success('Added succesfully..');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //edit
  editPurchase(form?: NgForm) {
    console.log('Updating...');
    this.purchaseService.updatePurchase(form.value).subscribe(
      (result) => {
        console.log(result);
        this.toastr.success('Added OR Updated Successfully!!');
      },
      (error) => {
        console.log(error);
        this.toastr.error('OOPS!!Something happened wrong.');
      }
    );
  }

  //delete
  //edit
  deletePurchase(form?: NgForm) {
    console.log('Deleting...');
    this.purchaseService.deletePurchase(form.value).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //changed status fetching
  changedStatus(status1){
    this._statusId=status1.target.value;
    console.log(status1.target.value);
  }
}
