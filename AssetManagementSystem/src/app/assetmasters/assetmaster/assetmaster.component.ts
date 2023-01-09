import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssetmasterService } from '../assetmaster.service';
import { Assetmaster } from '../assetmaster';


@Component({
  selector: 'app-assetmaster',
  templateUrl: './assetmaster.component.html',
  styleUrls: ['./assetmaster.component.scss']
})
export class AssetmasterComponent implements OnInit {
 //declare variable
 term: string;
 page:number=1;

 constructor(public assetmasterService: AssetmasterService ,
             public router:Router) { }

 ngOnInit(): void { //Life Cycle hook
   console.log("Hello Dipak");
   this.getAllAssetMastersForComponent();
   //window.location.reload();
 }
 //1 Get method for all Asset Masters
 getAllAssetMastersForComponent(){
   //call service here
   this.assetmasterService.getAllAssetMasters();
   console.log("Get All Asset MAsters");
   this.assetmasterService.getAllAssetMastersList().subscribe(
     (response)=>{
       console.log(response);
     },
     (error)=>{
       console.log(error);
     }
   );
 }

 // update Employee
updateAssetMaster(amId:number , assetMaster: Assetmaster){
  console.log(amId);
  //navigate to Edit Form with selected Assetmaster
  this.router.navigate(['assetmasters/addassetmaster',amId]);
  this.assetmasterService.formAssetMasterData=Object.assign({},assetMaster);
}


// populate Form When click on
populateForm(assetmaster: Assetmaster){
 console.log(assetmaster);
 this.assetmasterService.formAssetMasterData=Object.assign({},assetmaster);
}

}
