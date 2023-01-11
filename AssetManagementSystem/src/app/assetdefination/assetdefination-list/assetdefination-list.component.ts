import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AssetdefinationService } from '../assetdefination.service';
import { Assetdefination } from '../assetdefination';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assetdefination-list',
  templateUrl: './assetdefination-list.component.html',
  styleUrls: ['./assetdefination-list.component.scss']
})
export class AssetdefinationListComponent implements OnInit {

  //declare variables
  term: string;
  page: number =1;

  constructor(private toastr: ToastrService,
    public router: Router,
    public assetdefinationService:AssetdefinationService
    ) { }

  ngOnInit(): void {
    this.getAllAssetDefinationForComponent();
    this.assetdefinationService.getAssetTypes();
    this.assetdefinationService.getAssetClass();
  }

  getAllAssetDefinationForComponent(){

    //call service here
    this.assetdefinationService.getAllAssetDefination();
    console.log("get All Vendors");
    this.assetdefinationService.getAllAssetDefinationList().subscribe(
      (response)=>{
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    );

  }

  // update Vendors
  updateAssetDefination(adId:number, assetdefination: Assetdefination){
    console.log(adId);
    //navigate to edit from with selected vendor details
    this.router.navigate(['addassetdefination',adId]);
    this.populateForm(assetdefination);
  }

  // populate Form When click on
  populateForm(assetdefination: Assetdefination){
    console.log(assetdefination);
    this.assetdefinationService.formAssetdefinationData=Object.assign({},assetdefination);
  }

  //add Vendor
  addVendor(form ?: NgForm){
    this.router.navigate(['employeeadd']);
    console.log("inserting....");
    this.assetdefinationService.addAssetDefination(form.value).subscribe(
      (result)=>{
        console.log(result);
        this.toastr.success("Asset Defination Record Inserted Successfully","AssetManagementAppv2023");
      },
      (error)=>{
        console.log(error)
        this.toastr.error("Something Wrong... Try again","AssetManagementAppv2023");
      }
      );
  }

}
