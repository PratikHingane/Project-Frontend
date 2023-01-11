import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Assetdefination } from './assetdefination'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Assettype } from '../shared/assettype'
import { Assetclass } from '../shared/assetclass'

@Injectable({
  providedIn: 'root'
})
export class AssetdefinationService {

    //declare variables--- global variable
  formAssetdefinationData: Assetdefination=new Assetdefination();

  //list of AssetDefination
  assetdefination:Assetdefination[];
  assettype:Assettype[];
  assetclass:Assetclass[];

  constructor(private httpClient: HttpClient) { }

  //to get all asset definations
  getAllAssetDefination(){
    this.httpClient.get(environment.apiUrl +'/api/assetdefinations')
    .toPromise()
    .then(
      (response)=>{
        console.log(response);
        this.assetdefination = response as Assetdefination[];
      },
      (error)=>{
        console.log(error);
      }
      );
  }

  getAllAssetDefinationList():Observable<any>{
    return this.httpClient.get(environment.apiUrl+'/api/assetdefinations');
  }

  //to add Asset Defination;
  addAssetDefination(assetdefination:Assetdefination): Observable<any>{
    return this.httpClient.post(environment.apiUrl+'/api/assetdefinations',assetdefination);
  }

  //to update Asset Defination;
  updateAssetDefination(assetdefination:Assetdefination): Observable<any>{
    return this.httpClient.put(environment.apiUrl+'/api/assetdefinations',assetdefination);
  }

  //to get Asset Defination by id
  getAssetDefinationById(id:number):Observable<any>
  {
    return this.httpClient.get(environment.apiUrl +'/api/assetdefinations/'+id);
  }

  //get all asset types
  getAssetTypes():void{
    this.httpClient.get(environment.apiUrl +'/api/assettypes')
    .toPromise()
    .then(
      (response)=>{
        console.log(response);
        this.assettype=response as Assettype[];
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
