import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Vendor } from '../vendor';
import { VendorService } from "../vendor.service";


@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit {

   //declare variables
   term: string;
   page: number =1;
   
  constructor(private toastr: ToastrService,
    public router: Router,
    public vendorService: VendorService
    ) { }

  ngOnInit(): void {
    this.getAllVendorsForComponent();
    this.vendorService.getAssetTypes();
    this.vendorService.getAssetClass();
  }

  //1 Get method for all Vendors
  getAllVendorsForComponent(){
    //call service here
    this.vendorService.getAllVendors();
    console.log("get All Vendors");
    this.vendorService.getAllVendorsList().subscribe(
      (response)=>{
        console.log(response);
    
      },
      (error)=>{
        console.log(error);
      }
    );
  }

   // update Vendors
   updateVendors(venId:number, vendor: Vendor){
    console.log(venId);
    //navigate to edit from with selected vendor details
    this.router.navigate(['addvendor',venId]);
    this.populateForm(vendor);
  }

  // populate Form When click on
  populateForm(vendor: Vendor){
    console.log(vendor);
    this.vendorService.formVendorData=Object.assign({},vendor);
  }


  //add Vendor
  addVendor(form ?: NgForm){
    this.router.navigate(['addvendor']);
    console.log("inserting....");
    this.vendorService.addVendors(form.value).subscribe(
      (result)=>{
        console.log(result);
        this.toastr.success("Vendor Record Inserted Successfully","AssetManagementAppv2023");
      },
      (error)=>{
        console.log(error)
        this.toastr.error("Something Wrong... Try again","AssetManagementAppv2023");
      }
      );
  }

  


}
