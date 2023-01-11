import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Assetmaster } from './assetmaster';

@Injectable({
  providedIn: 'root'
})
export class AssetmasterService {
//declare variables--- global variable
formAssetMasterData: Assetmaster=new Assetmaster();//single Assetmaster

//list of Assetmaster
assetmasters:Assetmaster[];


constructor(private httpClient: HttpClient) { }//Constructor Injection : DI

// 1 get all Assetmaster
getAllAssetMasters(){
  this.httpClient.get(environment.apiUrl +'/api/assetmasters')
  .toPromise()
  .then(
    (response)=>{
      console.log(response);
      this.assetmasters=response as Assetmaster[];
    },
    (error)=>{
      console.log(error);
    }
    );
}

//2 Observable Types
getAllAssetMastersList():Observable<any>{
  return this.httpClient.get(environment.apiUrl+'/api/assetmasters');


}

// 3 Insert
insertAssetmaster(assetmaster:Assetmaster): Observable<any>{
  return this.httpClient.post(environment.apiUrl +'/api/assetmasters',assetmaster);
}

//4 Update
updateAssetmaster(assetmaster:Assetmaster): Observable<any>{
  return this.httpClient.put(environment.apiUrl +'/api/assetmasters',assetmaster);

}
}
