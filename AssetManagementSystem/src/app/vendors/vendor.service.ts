import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vendor } from '../vendors/vendor';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Assettype } from '../shared/assettype'
import { Assetclass } from '../shared/assetclass';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  //declare variables--- global variable
  formVendorData: Vendor=new Vendor();

  //list of Vendor
  vendors:Vendor[];
  assettypes :Assettype[];
  assetclass : Assetclass[];

  constructor(private httpClient: HttpClient) { }

  // to get all vendors
  getAllVendors(){
    this.httpClient.get(environment.apiUrl +'/api/vendors')
    .toPromise()
    .then(
      (response)=>{
        console.log(response);
        this.vendors=response as Vendor[];
      },
      (error)=>{
        console.log(error);
      }
      );
  }

  getAllVendorsList():Observable<any>{
    return this.httpClient.get(environment.apiUrl+'/api/vendors');
  }

    //to add vendors;
    addVendors(vendor:Vendor): Observable<any>{
      return this.httpClient.post(environment.apiUrl+'/api/vendors',vendor);
    }

    //to update vendor
    updateVendor(vendor:Vendor): Observable<any>{
      return this.httpClient.put(environment.apiUrl+'/api/vendors',vendor);
    }
  
    //to get Vendor by id
    getEmployeeById(id:number):Observable<any>
    {
      return this.httpClient.get(environment.apiUrl +'/api/vendors/'+id);
    }


    //get all asset types
    getAssetTypes():void{
      this.httpClient.get(environment.apiUrl +'/api/assettypes')
      .toPromise()
      .then(
        (response)=>{
          console.log(response);
          this.assettypes=response as Assettype[];
        },
        (error)=>{
          console.log(error);
        }
        );
    }

  //get all asset class
  getAssetClass():void{
    this.httpClient.get(environment.apiUrl +'/api/assetclasses')
    .toPromise()
    .then(
      (response)=>{
        console.log(response);
        this.assetclass=response as Assetclass[];
      },
      (error)=>{
        console.log(error);
      }
      );
  }
  
}
  

