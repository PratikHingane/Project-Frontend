import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from '../vendor.service';


@Component({
  selector: 'app-vendor-add',
  templateUrl: './vendor-add.component.html',
  styleUrls: ['./vendor-add.component.scss']
})
export class VendorAddComponent implements OnInit {


  //declare variables
  _venId: number;

  constructor(public vendorService: VendorService,
    private toastr: ToastrService, 
    private route:ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.vendorService.getAssetTypes();

    //getting data from url
    this._venId = this.route.snapshot.params['vdId']
  }

  //Submit Method
  onSubmit(form: NgForm){
    console.log(form.value);

    let _addVendId = this.vendorService.formVendorData.vdId;

    // check conditions
    if(_addVendId == 0 || _addVendId == null){
      this.addVendor(form);
      this.router.navigateByUrl("/vendorlist");
      //window.location.reload();
    }
    else{
      this.editVendor(form);
      //window.location.reload();
      this.redirect();
    }
  }

    //Insert Method
    addVendor(form ?: NgForm){
    console.log("inserting....");
    this.vendorService.addVendors(form.value).subscribe(
      (result)=>{
        console.log(result);
        //reset Form
        //notification
        this.toastr.success("Employee Record Inserted Successfully","EmpAppv2023");
      },
      (error)=>{
        console.log(error)
        this.toastr.error("Something Wrong... Try again","EmpAppv2023");
      }
      );
    }


    //Update
    editVendor(form ?: NgForm){
    console.log("updating....");
    
    this.vendorService.updateVendor(form.value).subscribe(
      (result)=>{
        console.log(result);
        this.toastr.success("Employee Record Edited Successfully","EmpAppv2023");
        
      },
      (error)=>{
        console.log(error);
        this.toastr.error("Something Wrong... Try again","EmpAppv2023");
      }
      );
  }

  redirect(){
    this.router.navigate(['vendorlist']);
  }

    
  

}
