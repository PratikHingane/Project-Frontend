import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AssetmasterService } from '../assetmaster.service';

@Component({
  selector: 'app-add-assetmaster',
  templateUrl: './add-assetmaster.component.html',
  styleUrls: ['./add-assetmaster.component.scss']
})
export class AddAssetmasterComponent implements OnInit {

  //declare variablee
  _amId: number;
  constructor(public assetmasterService : AssetmasterService,
              private toastr:ToastrService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {//Life Cycle hook
    
    //getting data from url
    this._amId=this.route.snapshot.params['amId'];
    
  }
  //Submit Method
  onSubmit(form :NgForm){
    console.log(form.value);
    let _addAssetMasterId=this.assetmasterService.formAssetMasterData.amId;

    //check condition
    if(_addAssetMasterId==0 || _addAssetMasterId==null){
    this.addAssetMaster(form);
    this.router.navigateByUrl("assetmasters/list");
   // window.location.reload();
     // this.redirectToEmpList();
    }
    else{
      this.editAssetMaster(form);
      window.location.reload();
    }
  }
  
  addAssetMaster(form?:NgForm){
    console.log("Inserting...");
    this.assetmasterService.insertAssetmaster(form.value).subscribe(
      (result)=>{
        console.log(result);
        //Notification
        this.toastr.success("Asset info has been added successfully!","AssetManagementAppV2023");
        
      },
      (error)=>{
        console.log(error);
        this.toastr.error("Something Wrong ...try again","AssetManagementAppV2023");
      }
      
    );
  }

  editAssetMaster(form?:NgForm){
    console.log("Updating...");
    this.assetmasterService.updateAssetmaster(form.value).subscribe(
      (result)=>{
        console.log(result);
      },
      (error)=>{
        console.log(error);
      }
      
    );
  }

  redirectToEmpList(){
    this.router.navigate(['assetmasterslist']);
  }

}
