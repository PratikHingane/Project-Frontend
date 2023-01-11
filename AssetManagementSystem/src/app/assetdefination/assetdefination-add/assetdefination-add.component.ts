import { Component, OnInit } from '@angular/core';
import { AssetdefinationService } from '../assetdefination.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assetdefination-add',
  templateUrl: './assetdefination-add.component.html',
  styleUrls: ['./assetdefination-add.component.scss']
})
export class AssetdefinationAddComponent implements OnInit {

   //declare variables
   _assdefId: number;

  constructor(public assetdefinationService: AssetdefinationService,
    private toastr: ToastrService, 
    private route:ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {

    //get all deppartments
    this.assetdefinationService.getAssetClass();
    this.assetdefinationService.getAssetTypes();


    //getting data from url
    this._assdefId = this.route.snapshot.params['adId']
  }

  //Submit Method
  onSubmit(form: NgForm){
    console.log(form.value);

    let _addAssDefdId = this.assetdefinationService.formAssetdefinationData.adId;

    // check conditions
    if(_addAssDefdId == 0 || _addAssDefdId == null){
      this.addAssetDefination(form);
      this.router.navigateByUrl("/assetdefinationlist");
      //window.location.reload();
    }
    else{
      this.editAssetDefination(form);
      //window.location.reload();
      this.redirect();
    }
  }

  //Insert Method
  addAssetDefination(form ?: NgForm){
    console.log("inserting....");
    this.assetdefinationService.addAssetDefination(form.value).subscribe(
      (result)=>{
        console.log(result);
        //reset Form
        //notification
        this.toastr.success("Asset Record Inserted Successfully","EmpAppv2023");
      },
      (error)=>{
        console.log(error)
        this.toastr.error("Something Wrong... Try again","EmpAppv2023");
      }
      );
    }

    //Update
    editAssetDefination(form ?: NgForm){
      console.log("updating....");
      
      this.assetdefinationService.updateAssetDefination(form.value).subscribe(
        (result)=>{
          console.log(result);
          this.toastr.success("Asset Record Edited Successfully","EmpAppv2023");
          
        },
        (error)=>{
          console.log(error);
          this.toastr.error("Something Wrong... Try again","EmpAppv2023");
        }
        );
    }

    redirect(){
      this.router.navigate(['vendorslist']);
    }



}
